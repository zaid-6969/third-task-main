import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import "./ProductGallery.css";

const ProductGallery = ({ images = [] }) => {
  const galleryItems = images.map((img) => ({
    original: img,
    thumbnail: img,
  }));

  return (
    <div className="product-gallery">
      <ImageGallery
        items={galleryItems}
        thumbnailPosition="left"
        showPlayButton={false}
        showFullscreenButton={true}
        showNav={false}
        showIndex={true}
        lazyLoad={true}
        slideOnThumbnailOver={true}
      />
    </div>
  );
};

export default ProductGallery;
