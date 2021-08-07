import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  fontSize: '30px',
  color: 'blue',
  textDecoration: 'none',
  padding: '15px',
  marginBottom: '30px'
}

const Nav = () => {
  return (
    <>
      <NavLink style={style} to="/">Home</NavLink>
      <NavLink style={style} to="/create-product">Create Product</NavLink>
    </>
  );
};

export default Nav;
