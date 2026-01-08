import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BlogPage from "./pages/BlogPage/BlogPage";
import ProductPage from "./pages/Productpage/ProductPage";
import CartPage from "./pages/CartPage/CardPage";
import ScrollToTop from "./components/ScrollTop";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
   const hideNavbar = location.pathname === "/"
    // || location.pathname === "/admin";
  return (
    <div>
      <ScrollToTop />

      {!hideNavbar ? <Navbar /> : null }
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="*"
          element={
            <h2
              style={{
                fontSize: "30px",
                height: "50vh",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              🤔 404 Page Not Found 🤔
            </h2>
          }
        />
      </Routes>
      {!hideNavbar && <Footer />}
    </div>
  );
};

export default App;
