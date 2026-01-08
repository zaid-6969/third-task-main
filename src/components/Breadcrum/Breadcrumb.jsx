import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();
  const { id } = useParams();

  const { products } = useSelector((state) => state.furniture);

  // Split URL → ["shop", "12"]
  const pathnames = location.pathname.split("/").filter(Boolean);

  const getLabel = (segment) => {
    // Product detail page
    if (segment === id) {
      const product = products.find((p) => p.id === Number(id));
      return product ? product.name : "Details";
    }

    // Static labels
    switch (segment) {
      case "shop":
        return "Shop";
      case "blog":
        return "Blog";
      case "product":
        return "Product";
      case "cart":
        return "Cart";
      default:
        return segment.charAt(0).toUpperCase() + segment.slice(1);
    }
  };

  return (
    <nav className="breadcrumb">
      <NavLink to="/">Home</NavLink>

      {pathnames.map((segment, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={index}>
            <span className="separator"> / </span>
            {isLast ? (
              <span className="current">{getLabel(segment)}</span>
            ) : (
              <NavLink to={routeTo}>{getLabel(segment)}</NavLink>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
