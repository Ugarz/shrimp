import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// TODO : check si on peut faire mieux
import App from "./containers/App"
import Header from "./containers/Header"
import Home from "./containers/Home"
import Portfolio from "./containers/Portfolio"
import Nav from "./containers/Nav"


ReactDOM.render((
  <BrowserRouter>
    <div className="container">
      <Route component={Nav} />
      <Route component={Header} />
      <Route path='/' component={App} />
      <Route path='/home' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      {/*<Route path='/project' component={ProjectPage} />*/}
      {/*<Route path='/project/:id' component={ProjectPage} />*/}
      {/*<Route path='/pay/:hash' component={Pay} />*/}
    </div>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
