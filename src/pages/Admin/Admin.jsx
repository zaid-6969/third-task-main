import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./Admin.css";

const Admin = () => {
  /* ================= IMAGE HELPER ================= */
  const generateImages = (url) => ({
    front: url,
    back: url,
    side: url,
    zoom: url,
    full: url,
  });

  /* ================= FORM STATE (UNCHANGED) ================= */
  const [form, setForm] = useState({
    name: "",
    design: "",
    price: "",
    rating: "",
    image: "",
    category: "sofa",
  });

  /* ================= TABLE + EDIT STATE ================= */
  const [tableData, setTableData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  // editItem = { id: "201", category: "bed" }

  /* ================= FETCH & NORMALIZE DATA ================= */
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [bedRes, sofaRes] = await Promise.all([
          axios.get("/bed"),
          axios.get("/sofa"),
        ]);

        const beds = bedRes.data.map((item) => ({
          ...item,
          id: String(item.id),     // 🔥 FORCE STRING
          category: "bed",         // 🔥 FORCE CATEGORY
        }));

        const sofas = sofaRes.data.map((item) => ({
          ...item,
          id: String(item.id),     // 🔥 FORCE STRING
          category: "sofa",        // 🔥 FORCE CATEGORY
        }));

        setTableData([...beds, ...sofas]);
      } catch (err) {
        console.error("FETCH ERROR:", err);
      }
    };

    fetchAll();
  }, []);

  /* ================= INPUT HANDLER ================= */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= ADD / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      design: form.design,
      price: Number(form.price),
      rating: Number(form.rating),
      images: generateImages(form.image),
    };

    try {
      // 🔹 EDIT MODE
      if (editItem) {
        const { id, category: originalCategory } = editItem;

        // ❗ DO NOT allow category change (avoids cross-collection 404)
        await axios.put(`/${originalCategory}/${id}`, payload);

        setTableData((prev) =>
          prev.map((item) =>
            item.id === id && item.category === originalCategory
              ? { ...item, ...payload }
              : item
          )
        );

        setEditItem(null);
      }
      // 🔹 ADD MODE
      else {
        const res = await axios.post(`/${form.category}`, payload);

        setTableData((prev) => [
          ...prev,
          {
            ...res.data,
            id: String(res.data.id), // 🔥 FORCE STRING
            category: form.category,
          },
        ]);
      }

      alert("Product saved successfully ✅");

      setForm({
        name: "",
        design: "",
        price: "",
        rating: "",
        image: "",
        category: "sofa",
      });
    } catch (err) {
      console.error("SAVE ERROR:", err);
      alert("Save failed — check console");
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (item) => {
    setEditItem({
      id: String(item.id),
      category: item.category,
    });

    setForm({
      name: item.name,
      design: item.design,
      price: item.price,
      rating: item.rating,
      image: item.images?.front || "",
      category: item.category,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    
  };

  /* ================= DELETE ================= */
  const handleDelete = async (item) => {
    try {
      await axios.delete(`/${item.category}/${String(item.id)}`);

      setTableData((prev) =>
        prev.filter(
          (p) => !(p.id === item.id && p.category === item.category)
        )
      );

      alert("Product deleted ✅");
    } catch (err) {
      console.error("DELETE ERROR:", err);
      alert("Delete failed — check console");
    }
  };

  return (
    <>
    <div className="admin-wrapper">
      <div className="admin-card">
        <h2>Admin – Add Product</h2>

        {/* 🔒 FORM (UNCHANGED STRUCTURE) */}
        <form className="admin-form" onSubmit={handleSubmit}>
          <input
            className="admin-input"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="admin-input"
            name="design"
            placeholder="Design"
            value={form.design}
            onChange={handleChange}
          />

          <input
            className="admin-input"
            name="price"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />

          <input
            className="admin-input"
            name="rating"
            type="number"
            min="1"
            max="5"
            placeholder="Rating"
            value={form.rating}
            onChange={handleChange}
          />

          <input
            className="admin-input"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />

          {/* 🔒 CATEGORY LOCKED DURING EDIT */}
          <select
            className="admin-select"
            name="category"
            value={form.category}
            onChange={handleChange}
            disabled={!!editItem}
          >
            <option value="sofa">Sofa</option>
            <option value="bed">Bed</option>
          </select>

          <button className="admin-button" type="submit">
            {editItem ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
     {/* ================= TABLE ================= */}
        <table
          // style={{
          //   width: "100%",
          //   marginTop: "30px",
          //   borderCollapse: "collapse",
          // }}
          className="table"
        >
          <thead>
            <tr>
              <th style={th}>Image</th>
              <th style={th}>Name</th>
              <th style={th}>Price</th>
              <th style={th}>Category</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tableData.length === 0 ? (
              <tr>
                <td colSpan="5" style={td}>
                  No products found
                </td>
              </tr>
            ) : (
              tableData.map((item) => (
                <tr key={`${item.category}-${item.id}`}>
                  <td style={td}>
                    <img
                      src={item.images?.front}
                      alt={item.name}
                      style={{ width: 50, height: 50, objectFit: "cover" }}
                    />
                  </td>
                  <td style={td}>{item.name}</td>
                  <td style={td}>{item.price}</td>
                  <td style={td}>{item.category}</td>
                  <td style={td}>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
    </>
  );
};

/* ================= TABLE STYLES ================= */
const th = { border: "1px solid #000", padding: "8px" };
const td = {
  border: "1px solid #000",
  padding: "8px",
  textAlign: "center",
};

export default Admin;
