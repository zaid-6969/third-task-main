import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";

const ProductInfo = ({ product }) => {
    const dispatch = useDispatch();

    if (!product) return null;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast.success("✅ Product added to cart!");
    };

    return (
        <div className="product-info">

            <h1 className="product-title">{product.name}</h1>

            <div className="price-box">
                <h2 className="current-price">${product.price}</h2>

                {product.oldPrice && (
                    <span className="old-price">${product.oldPrice}</span>
                )}
            </div>

            <p className="rating">⭐ {product.rating}</p>

            <p className="description">{product.design}</p>

            <p className="category">
                <strong>Category:</strong> {product.category}
            </p>

            {product.sku && (
                <p className="sku">
                    <strong>SKU:</strong> {product.sku}
                </p>
            )}

            {/* TAGS */}
            <div className="tag-section">
                <strong>Tags: </strong>
                {(product.tags || []).length > 0 ? (
                    product.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                    ))
                ) : (
                    <span>No tags</span>
                )}
            </div>

            {/* BUTTONS */}
            <div className="buttons">
                <button className="add-btn" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
