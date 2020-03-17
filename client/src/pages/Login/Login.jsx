import React, { useState, useContext } from 'react';
import './login.css';
import img from '../../f2-login.jfif'
import api from '../../api/index'
import { Link,Redirect } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
   
      api.getUserByUserName(e.target.elements.userName.value, e.target.elements.password.value).then(user => {
        

        if (user.data.success === true) {

      
            if(user.data.data.name==="טובה-מנהל"  ){
              sessionStorage.setItem("sadranofesh875", user.data.data.id)      
              sessionStorage.setItem("name", user.data.data.name)
              sessionStorage.setItem("isLoggedIn-admin", true)   
              sessionStorage.setItem("isLoggedIn", true)   
              window.location.assign('http://localhost:3000/admin')
            }
            else{
        
            
          sessionStorage.setItem("sadranofesh875", user.data.data.id)      
          sessionStorage.setItem("name", user.data.data.name)
          sessionStorage.setItem("isLoggedIn", true)   
          window.location.assign('http://localhost:3000/home')
            }
        } else {
          alert("you enterd wrong parametrs")
        }

        if (user.data.status === false) {
          alert("you enterd wrong parametrs")
        }
      })
  }
  render() {
    return (
      <div className='login'>
        <div></div>
        <div className='middle-wrapper'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="userName" placeholder="userName" required={true}></input>
          <br></br>
          <input type="password" name="password" placeholder="password" required={true}></input>
          <br></br>
          <input type="submit" value="התחבר"></input>
        </form>
          <img className="login-img"style={{ backgroundImage: `url(${img})` }} src="" alt=""/>
          </div>
      </div>
    )
  }
}

export default Login;