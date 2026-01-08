import React, { useState } from "react";

const ProductGallery = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="gallery-container">
      <div className="thumbnail-list">
        {images.map((img, i) => {
          if (i === 0) return null; // 🔥 skip first image

          return (
            <img
              key={i}
              src={img}
              alt="thumb"
              className="thumb"
              onClick={() => setMainImage(img)}
            />
          );
        })}
      </div>


      <div className="main-image-box">
        <img src={mainImage} alt="main" className="main-image" />
      </div>
    </div>
  );
};

export default ProductGallery;  
