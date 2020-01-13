import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { NavBar } from '../components'
import { Login, Admin, Orders, Home } from '../pages'


import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/admin">
          <Admin path="../pages" />
        </Route>
        <Route exact path="/orders">
          <Orders path="../pages" />
        </Route>

      </Router>
    )
  }
}
export default App