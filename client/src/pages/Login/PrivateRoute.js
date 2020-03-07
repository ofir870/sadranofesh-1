import React from "react"
import { Route, Redirect } from "react-router-dom"


let isAuth = true;


const PrivateRoute =  ({ component: Component, ...rest})=>(
  <Route {...rest} render={(props)=>(
    isAuth!==false
    
    ? <Component {...props}/>

    : 
    
    <Redirect to="/"/>
  )}/>
)

export default PrivateRoute