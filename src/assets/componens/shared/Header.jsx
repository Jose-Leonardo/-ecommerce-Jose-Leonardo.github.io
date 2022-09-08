import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header-css.css"
const Header = () => {
  return (
    <header className="header">
      <div className="header__div">
      <NavLink to="/">
        <h1 className="header__logo">e-commerce</h1>
      </NavLink>
      </div>
      <nav className="header__nav">
          
            <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/login">
              Login</NavLink>
            

            <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/purchases">
              Purchases</NavLink>

            <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/card">
              Cart</NavLink>

            <h2 className="header__link"></h2>
      </nav >
    </header>
  )
}

export default Header