import React, { useMemo } from "react";
import "./ProductPage.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import Breadcrumb from "../../components/Breadcrum/Breadcrumb";

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.furniture);

  const product = useMemo(
    () => products.find((p) => String(p.id) === String(id)),
    [products, id]
  );

  if (!product) {
    return <h2 className="not-found">Product Not Found</h2>;
  }

  const galleryImages = [
    product.images?.front,
    product.images?.back,
    product.images?.side,
    product.images?.zoom,
    product.images?.full,
    product.image,
  ].filter(Boolean);

  if (galleryImages.length === 0) {
    galleryImages.push(
      "https://via.placeholder.com/600x600?text=No+Image"
    );
  }

  const relatedProducts = useMemo(() => {
    return products
      .filter(
        (p) => p.category === product.category && p.id !== product.id
      )
      .slice(0, 4)
      .map((p) => ({
        title: p.name,
        img:
          p.images?.front ||
          p.image ||
          "https://via.placeholder.com/300x300?text=No+Image",
        id: p.id,
      }));
  }, [products, product]);

  return (
    <div className="product-page">
      <Breadcrumb />

      <div className="top-section">
        <ProductGallery images={galleryImages} />
        <ProductInfo product={product} />
      </div>

      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

export default ProductPage;
