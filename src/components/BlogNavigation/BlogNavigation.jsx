import React from "react";

const BlogNavigation = () => {
  const nav = [
    { label: "New wooden furniture", direction: "Back" },
    { label: "Your office should have only natural material", direction: "Next" },
  ];

  return (
    <div className="blog-nav">
      {nav.map((item, i) => (
        <div key={i} className="nav-card">
          <p className="direction">{item.direction}</p>
          <p className="label">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogNavigation;
