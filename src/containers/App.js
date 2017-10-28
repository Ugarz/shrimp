import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'

class App extends Component {
    render() {
        return (
          <div className="App">
            <Hero />
            <h1>C'est l'acceuil</h1>
            {this.props.children}
          </div>
        );
    }
}
App.propTypes = {
  children: PropTypes.children
}
App.defaultProps = {}
export default App
