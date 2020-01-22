import React from 'react';
import './login.css'; 







class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: '',
          password: ''
        }
        
    
        this.sendToDB = this.sendToDB.bind(this);
      }
    
      dbReady = {};
    
    
     
      sendToDB(e) {
        e.preventDefault();
        this.setState({
          name:e.target.elements.userName.value,
          phone:e.target.elements.password.value
        })
    
        // this.dbReady = {
        //   name:e.target.elements.userName.value,
        //   phone:e.target.elements.password.value
        // }
        // console.dir(this.dbReady)
    
      }

    render() {
        return (
            <div className='login'>
              <form onSubmit={this.sendToDB}>
                  <input type="text" name="userName" autoFocus placeholder="userName"></input>
                  <br></br>
                  <input type="text" name="password" placeholder="password"></input>
                  <br></br>
                  <input type="submit" placeholder="submit" formAction=""></input>
              </form>
          <div>
              {this.state.password}
              {this.state.userName}
              </div>
            </div>
        )
    }
}

export default Login;