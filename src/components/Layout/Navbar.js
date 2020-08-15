import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../Search";

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav className="navbar fixed-top  navbar-expand-lg navbar-light">
        <Link className="navbar-brand ml-5" to="l">
          <img src={logo} alt="logo" style={{ width: "75px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fas fa-bars" style={{ color: "#fff" }}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link
                className="nav-link  text-uppercase ml-5"
                id="textLink"
                to="/"
              >
                Home&nbsp;
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link  text-uppercase ml-5"
                id="textLink"
                to="/movies"
              >
                movies
              </Link>
            </li>
          </ul>
          <Search />
        </div>
      </nav>
      <div className="menu-vide"></div>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  .menu-vide {
    height: 70px;
    background-color: #2a2e37;
  }
  nav {
    z-index: 1000;
  }
  .navbar {
    background: #0f1014;
    padding: 0 45px 10px 0;
  }
  .navbar-toggler:focus {
    outline: none;
  }
  .navbar-toggler {
    border: none;
  }
  button {
    background-color: #f4c10f;
    font-weight: bolder;
  }
  button:hover {
    color: #f4c10f;
    border-color: #000;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
  }

  ul li #textLink:hover {
    color: #f4c10f;
    font-weight: bolder;
    font-size: 22px;
    background-color: transparent;
  }
  #textLink {
    color: #fff;
    font-weight: bolder;
    font-size: 20px;
  }
`;
