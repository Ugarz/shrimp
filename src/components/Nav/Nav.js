import React from 'react'
// import PropTypes from 'prop-types'
import './Nav.css'

const NavLink = require('react-router-dom').NavLink

const Nav = () => (
  <nav className="Nav">
    This is Nav
    <ul>
      <li><NavLink exact activeClassName='active' to="/">Go Root</NavLink></li>
      <li><NavLink activeClassName='active' to="/project">Go to projects Page</NavLink></li>
      <li><NavLink activeClassName='active' to="/project/1">Go to first project Page</NavLink></li>
      <li><NavLink activeClassName='active' to="/portfolio">Go to Portfolio Page</NavLink></li>
      <li><NavLink activeClassName='active' to="/services">Go to Services page</NavLink></li>
    </ul>
  </nav>
);

Nav.propTypes = {}

Nav.defaultProps = {}

export default Nav
