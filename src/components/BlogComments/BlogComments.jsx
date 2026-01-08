import React from "react";

const BlogComments = () => {
  return (
    <div className="comments-section">
      <h3>Post a comment</h3>

      <textarea placeholder="Your comment" />
      <input type="text" placeholder="Your name" />
      <input type="text" placeholder="Your email" />
      <input type="text" placeholder="Website" />

      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default BlogComments;
