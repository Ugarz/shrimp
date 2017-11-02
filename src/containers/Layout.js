import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../reset.css'
import './layout.css'

// TODO : check si on peut faire mieux
import App from "./App"
import Header from "./Header"
import Home from "./Home"
import Portfolio from "./Portfolio"
import Nav from "./Nav"

const pending = false;

class Layout extends Component {
    render() {

        return (
          <div className="container">
            <Route component={Nav} />
            <Route component={Header} />
            <Route path='/' render={props => {
              if(pending) return <div>Loading...</div>
              return <App {...props} />
            }} />
            <Route path='/home' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            {/*<Route path='/project' component={ProjectPage} />*/}
            {/*<Route path='/project/:id' component={ProjectPage} />*/}
            {/*<Route path='/pay/:hash' component={Pay} />*/}
          </div>
        );
    }
}

Layout.propTypes = {}

Layout.defaultProps = {}

export default Layout
