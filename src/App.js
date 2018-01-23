import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Start from './pages/start'
import Clothes from './pages/clothes'

module.exports = function(source) {
  return source.replace(/^#! .*\n/, "");
};

class App extends Component {

  constructor(props) {
  super(props)
}

  render() {
    return (
      <Router>
        <div className="outer-container">
          <Route exact path="/" render={(props) => (
            <Start {...props}/>
          )}/>

          <Route path="/clothes" render= {(props) => (
            <Clothes   {...props}/>
          )}/>

        </div>
      </Router>
      );
    }
  }

export default App;
