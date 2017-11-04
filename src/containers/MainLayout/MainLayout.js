import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import './MainLayout.css'

import Home from '../Home/Home'
import Services from '../Services/Services'
import Portfolio from '../Portfolio/Portfolio'

class MainLayout extends Component {
    render() {
        return (
          <div className="MainLayout">
            <h1>This is the root rendered by the main layout</h1>
            <Home />
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/services' component={Services} />
            </Switch>
          </div>
        );
    }
}
MainLayout.propTypes = {}

MainLayout.defaultProps = {}

export default MainLayout
