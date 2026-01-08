import React from "react";

const BlogContent = ({ post }) => {
  return (
    <div className="blog-content">
      <img src={post.images[0]} alt="" className="main-image" />

      <div className="post-meta">
        <span>{post.date}</span> | <span>{post.category}</span> | 
        <span>{post.author}</span> | <span>{post.read}</span>
      </div>

      <h1>{post.title}</h1>

      <p>{post.description}</p>

      <blockquote>{post.quote}</blockquote>

      <div className="image-row">
        {post.images.slice(1).map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </div>

      <p>{post.longText}</p>
    </div>
  );
};

export default BlogContent;
