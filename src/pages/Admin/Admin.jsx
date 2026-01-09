import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  const generateImages = (url) => ({
    front: url,
    back: url,
    side: url,
    zoom: url,
    full: url,
  });

  const [form, setForm] = useState({
    name: "",
    design: "",
    price: "",
    rating: "",
    image: "",
    category: "sofa",
  });

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    if (location.state?.item) {
      const item = location.state.item;

      setEditItem({ id: item.id, category: item.category });

      setForm({
        name: item.name,
        design: item.design,
        price: item.price,
        rating: item.rating,
        image: item.images?.front || "",
        category: item.category,
      });
    }
  }, [location.state]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
      if (editItem) {
        await axios.put(`/${editItem.category}/${editItem.id}`, payload);
        alert("Product updated ✅");
        setForm({
          name: "",
          design: "",
          price: "",
          rating: "",
          image: "",
          category: "sofa",
        });
      } else {
        await axios.post(`/${form.category}`, payload);
        alert("Product added ✅");
        setForm({
          name: "",
          design: "",
          price: "",
          rating: "",
          image: "",
          category: "sofa",
        });
      }

      // navigate("/admintable");
    } catch (err) {
      console.error("SAVE ERROR:", err);
      alert("Save failed");
    }
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-card">
        <h2>{editItem ? "Edit Product" : "Add Product"}</h2>

        <form className="admin-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="design"
            placeholder="Design"
            value={form.design}
            onChange={handleChange}
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />
          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            placeholder="Rating"
            value={form.rating}
            onChange={handleChange}
          />
          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            disabled={!!editItem}
          >
            <option value="sofa">Sofa</option>
            <option value="bed">Bed</option>
          </select>

          <button type="submit">
            {editItem ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
