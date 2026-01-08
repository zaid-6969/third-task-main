import React from "react";

const BlogSidebar = ({
  onSearch,
  onMaxPriceChange,
  onCategorySelect,
  maxPrice,
  selectedCategory,
  categoryCounts = {},
  children,
}) => {
  const totalCount = Object.values(categoryCounts).reduce(
    (a, b) => a + b,
    0
  );

  return (
    <div className="blog-sidebar">
      {onSearch && (
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      )}

      {/* 📂 CATEGORIES */}
      <div className="category-section">
        <h3>Categories</h3>

        <p
          className={`category-item ${
            selectedCategory === "all" ? "active" : ""
          }`}
          onClick={() => onCategorySelect("all")}
        >
          All ({totalCount})
        </p>

        {Object.entries(categoryCounts).map(([cat, count]) => (
          <p
            key={cat}
            className={`category-item ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => onCategorySelect(cat)}
          >
            {cat} ({count})
          </p>
        ))}
      </div>

      {/* 💲 PRICE RANGE */}
      {onMaxPriceChange && (
        <div className="price-filter">
          <input

           style={{
            width:"100%"
           }}

            type="range"
            min="39.99"
            max='1999.99'
            value={maxPrice}
            onChange={(e) =>
              onMaxPriceChange(Number(e.target.value))
            }
          />
          <h3>Price: $39.99 - ${maxPrice}</h3>

        </div>
      )}

      {children}
    </div>
  );
};

export default BlogSidebar;
