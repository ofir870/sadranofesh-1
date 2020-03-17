import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute =  ({ component: Component, ...rest})=>(
  <Route {...rest} render={(props)=>(
    
    sessionStorage.getItem('isLoggedIn')==="true"
    
    ? <Component {...props}/>

    : 
    
    <Redirect to="/"/>
  )}/>
)

export default PrivateRoute