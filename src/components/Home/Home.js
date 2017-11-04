import React, { Component } from 'react';

import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Portfolio from '../Portfolio/Portfolio'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Hi from Home
        <Hero />
        <Portfolio />
        <Services />
      </div>
    );
  }
}

export default Home;
