import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateAdminRoute =  ({ component: Component, ...rest})=>(
  <Route {...rest} render={(props)=>(
    
    sessionStorage.getItem('isLoggedIn-admin')==="true"
    
    ? <Component {...props}/>

    : 
    
    <Redirect to="/"/>
  )}/>
)

export default PrivateAdminRoute