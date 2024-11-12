//import React from "react";
import NavBar from "./NavBar";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="content">
        <img
          src="../../public/tree-icon-2.jpg"
          alt="ATBOP Logo"
          className="logo"
        />
        <div className="header-text">
          <h1>Associated Therapists Bay of Plenty (ATBOP)</h1>
          <h3>Your pathway to personal and professional growth</h3>
        </div>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
