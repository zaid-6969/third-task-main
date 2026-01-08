import React from "react";

const RelatedProducts = ({ products }) => {
  return (
    <div className="related">
      <h2>Related products</h2>

      <div className="related-row">
        {products.map((p, i) => (
          <div key={i} className="related-card">
            <img src={p.img} alt="" />
            <p>{p.title}</p>

            <div className="stars">
              {Array(5).fill().map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
