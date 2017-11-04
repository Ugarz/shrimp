import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './reset.css'
import './App.css'

// TODO : check si on peut faire mieux
import MainLayout from "../MainLayout/MainLayout"
import Nav from "../../components/Nav/Nav"
import Project from '../Project/Project'
import ProjectVue from '../components/ProjectVue'

const pending = false;

class App extends Component {
    render() {

        return (
          <div className="container">
            <Switch>
              <Route component={Nav} />
              <Route path='/' render={props => {
                if(pending) return <div>Loading...</div>
                return <MainLayout {...props} />
              }} />
              <Route path='/project' component={ProjectVue} />
            </Switch>
          </div>
        );
    }
}

App.propTypes = {}

App.defaultProps = {}

export default App
