import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <Link to='/'><h1>BookWise</h1></Link>
    </div>
  )
}

export default Header;