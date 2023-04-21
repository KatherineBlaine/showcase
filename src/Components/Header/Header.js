import React from "react";
import Form from "../Form/Form";
import { Switch, Link, Route } from "react-router-dom";
import './Header.css'

const Header = ({ searchBooks }) => {
  return (
    <Switch>
      <Route exact path='/'>
        <div className="header">
          <h1>BookWise</h1>
          <Form filterBooks={searchBooks}/>
        </div>
      </Route>
      <Route exact path='/:id'>
        <div className="header">
          <Link to='/'><h1>BookWise</h1></Link>
        </div>
      </Route>
    </Switch>
  )
}

export default Header;