import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// const Link = require('react-router-dom').Link
const NavLink = require('react-router-dom').NavLink

class Nav extends Component {
    render() {
        return (
          <nav style={{backgroundColor: '#bada55', color: 'white'}}>
            This is Nav
            <ul>
              <li><NavLink exact activeClassName='active' to="/">Go Root</NavLink></li>
              <li><NavLink activeClassName='active' to="/project">Go to projects Page</NavLink></li>
              <li><NavLink activeClassName='active' to="/project/1">Go to first project Page</NavLink></li>
            </ul>
          </nav>
        );
    }
}

Nav.propTypes = {}

Nav.defaultProps = {}

export default Nav
