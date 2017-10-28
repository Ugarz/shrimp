import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Nav extends Component {
    render() {
      console.log(this.props);
      const { links } = this.props
        return (
          <div className="Navigation">
            <h1>C'est la Navigation</h1>
            <a href="/">Go Root</a><br />
            <a href="/home">Go Home</a><br />
            <a href="/portfolio">Go Portfolio</a>
            <a href="/project">Go to projects Page</a>
            <a href="/project/1">Go to first project Page</a>
          </div>
        );
    }
}

Nav.propTypes = {
  links: PropTypes.object
}

Nav.defaultProps = {}

export default Nav
