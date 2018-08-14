import React from "react";
import "./Nav.css";

const Nav = props => (

<nav className="navbar navbar-default">
  <div className="container-fluid">
    <h1>Score: {props.score}</h1>
  </div>


</nav>

);

export default Nav;