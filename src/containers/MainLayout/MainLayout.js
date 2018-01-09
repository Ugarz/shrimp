import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import './MainLayout.css'

import Home from '../../components/Home/Home'
import Services from '../../components/Services/Services'
import Portfolio from '../../components/Portfolio/Portfolio'
import Project from '../../components/Project/Project'

class MainLayout extends Component {
    render() {
        return (
          <div className="MainLayout">
            <h1>This is the root rendered by the main layout</h1>
            <Home />
          </div>
        );
    }
}
MainLayout.propTypes = {}

MainLayout.defaultProps = {}

export default MainLayout
