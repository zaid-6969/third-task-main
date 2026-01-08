import React, { useEffect, useState } from "react";
import "./Blog.css";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";
import { useDispatch, useSelector } from "react-redux";
import loadFurniture from "../../features/furnitures/furnitureSlice";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrum/Breadcrumb";

const BlogListPage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.furniture);


  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    if (products.length === 0) {
      dispatch(loadFurniture());
    }
  }, [products, dispatch]);


  const sofaProducts = products.filter((item) => item.category === "sofa");


  const totalPages = Math.ceil(sofaProducts.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentPosts = sofaProducts.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="blog-container">
      <div className="blog-left">
        <Breadcrumb />
        {loading && <h2>Loading...</h2>}

        {!loading &&
          currentPosts.map((product) => (
            <Link
              to={`/blog/${product.id}`}
              key={product.id}
              className="blog-card"
            >
              <div className="img-card">
                <img src={product.images.front} alt="" className="blog-img" />
              </div>
              <div className="blog-meta">
                <span>Sep 26, 2022</span> •
                <span>{product.category}</span> •
                <span>⭐ {product.rating}</span>
              </div>

              <h2 className="blog-title">{product.name}</h2>

              <p className="blog-text">{product.design}</p>

              <span className="read-more">Read more →</span>
            </Link>
          ))}


        <div className="pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={currentPage === i + 1 ? "active-page" : ""}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

      </div>

      <div className="second-container">
        <BlogSidebar>
          <div className="side-product">
            <h1>Sofa Blog Section</h1>
            <p>Explore top trending sofa designs.</p>
          </div>
        </BlogSidebar>
      </div>

    </div>
  );
};

export default BlogListPage;
