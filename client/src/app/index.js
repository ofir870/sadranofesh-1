import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import PrivateRoute from '../pages/Login/PrivateRoute'
import PrivateAdminRoute from '../pages/Login/PrivateAdminRoute'
import { Login, Admin, OrdersHistory, Home, ManageUsers, Register } from '../pages'
import { Index } from '../pages/Login/Index'
import { UserContext } from '../model/context/userContext';


  
class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Router>
        <Route exact path="/"><Login/></Route>

      
        <PrivateRoute  path='/home' component={Home}/>

        <PrivateAdminRoute  exact path="/admin" component={Admin}/>

        <PrivateRoute exact path="/admin/register" component={Register}/>

        <PrivateRoute  exact path="/admin/ManageUsers"component={ManageUsers}/>

        <PrivateRoute exact path="/admin/ordershistory"component={OrdersHistory}/>
     
      </Router>
    )
  }
}
export default App