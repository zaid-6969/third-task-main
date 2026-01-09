import React from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const AppNavLink = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive, isPending }) =>
      isActive ? "my-active-class" : isPending ? "my-pending-class" : ""
    }
  >
    <li className="nav-item">{label}</li>
  </NavLink>
);

export const AdminNav = () => {
  return (
    <>
      <div className="nav">
        <ul className="ul1">
          <li>
            <h1 style={{ color: "black" }}>soudemy</h1>
          </li>
          <AppNavLink to="/admin" label="Admin" />
          <AppNavLink to="/admintable" label="Product List" />
          <AppNavLink to="/home" label="Home" />
        </ul>
        <ul className="ul2">
          <li>
            <FiSearch />
          </li>
          <li>
            <NavLink to="/cart">
              <BsBag style={{ color: "grey" }} />
            </NavLink>
          </li>
          <li>
            <RxHamburgerMenu />
          </li>
        </ul>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="ul1">
        <li>
          <h1 style={{ color: "black" }}>soudemy</h1>
        </li>
        <AppNavLink to="/home" label="Home" />
        <AppNavLink to="/Shop" label="Shop" />
        <AppNavLink to="/About" label="About" />
        <AppNavLink to="/Blog" label="Blog" />
      </ul>
      <ul className="ul2">
        <li>
          <FiSearch />
        </li>
        <li>
          <NavLink to="/cart">
            <BsBag style={{ color: "grey" }} />
          </NavLink>
        </li>
        <li>
          <RxHamburgerMenu />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
