import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // ✅ ONLY ONE
import { Link } from "react-router-dom";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";
import Breadcrumb from "../../components/Breadcrum/Breadcrumb";
import { fetchFurniture } from "../../features/furnitures/furnitureSlice";
import "./Shop.css";

const Shop = () => {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.furniture.products) || [];
  

  const [searchText, setSearchText] = useState("");
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  // 🔹 FETCH DATA FROM API (ONLY NEW LOGIC)
  useEffect(() => {
    dispatch(fetchFurniture());
  }, [dispatch]);

  // 🔥 SET MAX PRICE DYNAMICALLY
  useEffect(() => {
    if (products.length > 0) {
      const highestPrice = Math.max(...products.map((p) => p.price));
      setMaxPrice(highestPrice);
    }
  }, [products]);

  // 🔥 FILTER PRODUCTS (MEMOIZED)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchText =
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.design.toLowerCase().includes(searchText.toLowerCase());

      const matchPrice = product.price <= maxPrice;

      return matchCategory && matchText && matchPrice;
    });
  }, [products, searchText, maxPrice, selectedCategory]);

  // 🔥 RESET PAGE WHEN FILTER CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, maxPrice, selectedCategory]);

  // 🔥 CATEGORY COUNTS (FOR SIDEBAR)
  const categoryCounts = filteredProducts.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  // 🔥 PAGINATION LOGIC
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="shop-wrapper">
      <div className="shop-content">
        <Breadcrumb />

        <div className="product-grid">
          {currentProducts.length === 0 && (
            <h2 className="no-products">Loading....</h2>
          )}

          {currentProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-card"
            >
              <div className="shop-img-card">
                <img
                  src={product.images?.front}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              <h3 className="p-name">{product.name}</h3>
              <p className="p-rating">⭐ {product.rating}</p>
              <p className="p-price">${product.price}</p>
            </Link>
          ))}
        </div>

        {/* 🔥 PAGINATION */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active-page" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* 🔥 SIDEBAR */}
      <aside className="shop-sidebar">
        <BlogSidebar
          onSearch={setSearchText}
          onMaxPriceChange={setMaxPrice}
          onCategorySelect={setSelectedCategory}
          activeCategory={selectedCategory}
          categoryCounts={categoryCounts}
          totalCount={filteredProducts.length}
          maxPrice={maxPrice}
        />
      </aside>
    </div>
  );
};

export default Shop;
