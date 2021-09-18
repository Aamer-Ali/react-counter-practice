import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          NavBar
        </a>
        <span>Total Items are : {totalCounters}</span>
      </nav>
    </div>
  );
};

export default NavBar;
