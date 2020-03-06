import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from '../pages/Login/PrivateRoute'
import { Login, Admin, OrdersHistory, Home, ManageUsers, Register } from '../pages'
import { Index } from '../pages/Login/Index'
import { UserContext } from '../model/context/userContext';

  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn:false
    }

    this.changeIsLoggedIn = this.changeIsLoggedIn.bind(this);
  }

  changeIsLoggedIn(){
    this.setState({
      isLoggedIn:true
    })
  }
  render() {
    return (
      <Router>

        <UserContext.Provider value='hello all ' >
       
        <Route exact path="/"><Login/></Route>
        <Route exact path="/"><Login isLoggedIn={this.state.isLoggedIn} changeIsLoggedIn={this.changeIsLoggedIn}/></Route>

      
        <PrivateRoute isAuth={this.state.isLoggedIn} path='/home' component={Home}/>

        <PrivateRoute exact path="/admin" component={Admin}/>

        <PrivateRoute exact path="/admin/register" component={Register}/>

        <PrivateRoute exact path="/admin/ManageUsers"component={ManageUsers}/>

        <PrivateRoute exact path="/admin/ordershistory"component={OrdersHistory}/>
        </UserContext.Provider>
      </Router>
    )
  }
}
export default App