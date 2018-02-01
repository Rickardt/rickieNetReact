import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Start from './pages/start'
//Clothes page requires OpenCV, it's a pain in the ass to install
// import Clothes from './pages/clothes'


class App extends Component {

  constructor(props) {
  super(props)
}

          // <Route path="/clothes" render= {(props) => (
          //   <Clothes   {...props}/>
          // )}/>
  render() {
    return (
      <Router>
        <div className="outer-container">
          <Route exact path="/" render={(props) => (
            <Start {...props}/>
          )}/>


        </div>
      </Router>
      );
    }
  }

export default App;
