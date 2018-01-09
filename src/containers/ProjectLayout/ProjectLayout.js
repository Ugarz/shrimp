import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// import PropTypes from 'prop-types'
import './ProjectLayout.css'

import Project from '../../components/Project/Project'
import ProjectVue from '../../components/ProjectVue/ProjectVue'

class ProjectLayout extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div className="ProjectLayout">
              <h1>This is the root rendered by the Project Layout</h1>
              <Switch>
                <Route exact path='/project' component={Project} />
                <Route path='/project/:number' component={ProjectVue} />
              </Switch>
            </div>
        );
    }
}

ProjectLayout.propTypes = {}

ProjectLayout.defaultProps = {}

export default ProjectLayout
