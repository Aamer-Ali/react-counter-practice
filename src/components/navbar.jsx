import React, { Component } from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            NavBar
          </a>
          <span>Total Items are : {this.props.totalCounters}</span>
        </nav>
      </div>
    );
  }
}

export default NavBar;
