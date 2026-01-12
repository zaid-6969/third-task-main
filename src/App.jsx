import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Shop from "./pages/Shop/Shop";
import BlogPage from "./pages/BlogPage/BlogPage";
import ProductPage from "./pages/Productpage/ProductPage";
import CartPage from "./pages/CartPage/CardPage";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Navbar, { AdminNav } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollTop";
import AdminTable from "./pages/Admintable/AdminTable";

const App = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === "/";
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div>
      <ScrollToTop />

     
      {isAdminPage && <AdminNav />}

     
      {!isAuthPage && !isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admintable" element={<AdminTable />} />

        <Route
          path="*"
          element={
            <h2
              style={{
                fontSize: "30px",
                height: "50vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              🤔 404 Page Not Found 🤔
            </h2>
          }
        />
      </Routes>

      {/* Footer */}
      {!isAuthPage && !isAdminPage && <Footer />}

        <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </div>
  );
};

export default App;
