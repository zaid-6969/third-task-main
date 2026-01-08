import React, { useEffect } from "react";
import "./BlogPage.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import loadFurniture from "../../features/furnitures/furnitureSlice";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";
import Breadcrumb from "../../components/Breadcrum/Breadcrumb";

const BlogPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.furniture);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(loadFurniture(null));
    }
  }, [products, dispatch]);

  if (loading || products.length === 0) return <h2>Loading blog...</h2>;

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Blog Not Found</h2>;

  return (

    <div className="blog-page">
      <div className="left-section">
        <Breadcrumb />
        <div className="img-card">
          <img src={product.images.front} alt="" className="main-image" />
        </div>
        <div className="post-meta">
          <span>Sep 26, 2022</span> |
          <span>{product.category}</span> |
          <span>By Admin</span> |
          <span>3 Comments</span>
        </div>

        <h1 className="post-title">{product.name}</h1>

        <p className="post-text">
          {product.design}. Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>

        <blockquote>
          “{product.design}” — this sofa is one of our trending models.
        </blockquote>

        <p className="post-text">
          Vestibulum vulputate amet nunc amet. Lorem ipsum dolor sit amet consectetur
          adipiscing elit. Egestas adipiscing placerat malesuada mattis suspendisse.
        </p>

        <div className="image-row">
          <img src={product.images.side} alt="" />
          <img src={product.images.full} alt="" />
        </div>

        <div className="blog-nav">
          <div className="nav-card">
            <p className="direction">← Back</p>
            <p className="label">New wooden furniture</p>
          </div>

          <div className="nav-card">
            <p className="direction">Next →</p>
            <p className="label">Your office should only have natural material</p>
          </div>
        </div>

        <div className="comments-section">
          <h3>Post a comment</h3>
          <textarea placeholder="Your comment"></textarea>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <button className="submit-btn">Submit</button>
        </div>

      </div>

      <div className="right-section">
        <BlogSidebar />
      </div>
    </div>
  );
};

export default BlogPage;
