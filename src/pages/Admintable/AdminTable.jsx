import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import "./AdminTable.css";

const AdminTable = () => {
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // 🔍 FILTER STATES
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [bedRes, sofaRes] = await Promise.all([
          axios.get("/bed"),
          axios.get("/sofa"),
        ]);

        const beds = bedRes.data.map((item) => ({
          ...item,
          id: String(item.id),
          category: "bed",
        }));

        const sofas = sofaRes.data.map((item) => ({
          ...item,
          id: String(item.id),
          category: "sofa",
        }));

        const allData = [...beds, ...sofas];

        setTableData(allData);
        setFilteredData(allData);
      } catch (err) {
        console.error("FETCH ERROR:", err);
      }
    };

    fetchAll();
  }, []);

  /* ================= FILTER LOGIC ================= */
  useEffect(() => {
    let data = [...tableData];

    // 🔹 CATEGORY FILTER
    if (categoryFilter !== "all") {
      data = data.filter(
        (item) => item.category === categoryFilter
      );
    }

    // 🔹 SEARCH FILTER
    if (search.trim() !== "") {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredData(data);
  }, [search, categoryFilter, tableData]);

  /* ================= DELETE ================= */
  const handleDelete = async (item) => {
    try {
      await axios.delete(`/${item.category}/${item.id}`);

      const updated = tableData.filter(
        (p) => !(p.id === item.id && p.category === item.category)
      );

      setTableData(updated);
      setFilteredData(updated);

      alert("Product deleted ✅");
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  return (
    <div className="admin-table-wrapper">
      {/* ================= FILTER BAR ================= */}
      <div className="table-filter">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="sofa">Sofa</option>
          <option value="bed">Bed</option>
        </select>
      </div>

      {/* ================= TABLE ================= */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-data">
                No products found
              </td>
            </tr>
          ) : (
            filteredData.map((item) => (
              <tr key={`${item.category}-${item.id}`}>
                <td>
                  <img
                    src={item.images?.front}
                    alt={item.name}
                    className="table-img"
                  />
                </td>
                <td>{item.name}</td>
                <td>₹ {item.price}</td>
                <td className="category">{item.category}</td>
                <td className="actions">
                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate("/admin", { state: { item } })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
