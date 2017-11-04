import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './reset.css'
import './App.css'

// TODO : check si on peut faire mieux
import MainLayout from "../MainLayout/MainLayout"
import Nav from "../Nav/Nav"

const pending = false;

class App extends Component {
    render() {

        return (
          <div className="container">
            <Route component={Nav} />
              <Route path='/' render={props => {
                if(pending) return <div>Loading...</div>
                return <MainLayout {...props} />
              }} />
          </div>
        );
    }
}

App.propTypes = {}

App.defaultProps = {}

export default App
