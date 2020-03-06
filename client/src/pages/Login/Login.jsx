import React, {useState,useContext} from 'react';
import './login.css';
import logo from '../../f2.jfif'
import api from '../../api/index'

import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from '../../model/redux/actions';


// useSelector(state => state.isLoggedIn);
// console.log(isLoggedIn+"   reduxxx" )
// const dispatch = useDispatch();

// dispatch(isLoggedIn(isLoggedIn))

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
  
  handleSubmit(e) {
    e.preventDefault();
  
   api.getUserByUserName( e.target.elements.userName.value,  e.target.elements.password.value).then(user => {
      console.log(user)
      if (user.data.success === true) {
        this.props.changeIsLoggedIn()
        // window.location.assign('http://localhost:3000/home')
      } else {
        alert("you enterd wrong parametrs")
      }

      if (user.data.status === false){
            alert("you enterd wrong parametrs")
      }
    })

  }

  render() {


    return (
      <div className='login' style={{ backgroundImage: `url(${logo})` }}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="userName" autoFocus placeholder="userName" required="true"></input>
          <br></br>
          <input type="text" name="password" placeholder="password" required="true"></input>
          <br></br>
          <input type="submit" placeholder="submit" formAction=""></input>
        </form>

      </div>
    )
  }
}

export default Login;