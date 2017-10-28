import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './containers/Nav'
import App from './containers/App'
import Home from './containers/Home'

import { BrowserRouter, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route component={Nav} />
      <Route path='/' component={App} />
      <Route path='/home' component={Home} />
      {/*<Route path='/project' component={ProjectPage} />*/}
      {/*<Route path='/project/:id' component={ProjectPage} />*/}
      {/*<Route path='/pay/:hash' component={Pay} />*/}
      {/*<Route path='/portfolio' component={Portfolio} />*/}
    </div>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
