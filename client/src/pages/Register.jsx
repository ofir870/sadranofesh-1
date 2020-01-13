import React, { Component } from 'react'
import api from '../api'


export default class getUsersTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "", 
            password: "",
            message: "",
            user: []
        }
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeMessage = this.onChangeMessage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });   }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });}
    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });}

    onSubmit = async(e)=> {
        e.preventDefault();
        
        const user = {
           name: this.state.name,
           password: this.state.password,
           message: this.state.message
       }
        await api.createUser(user).then(data => {
        
            console.log(' usersList -> render -> users', user)
            return(console.log(data))         
        })
        alert("User Added sucssafuly")

        this.setState({
            name:"",
            password:"",
            message:""
        })
    }
    render() {
        return (
            <div>
                   <form  onSubmit ={this.onSubmit}>
                       <div className="form-group">
                            <label>Enter UserName: </label>
                            <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                       </div>

                       <div className="form-group">
                            <label>Enter Password: </label>
                            <input type="current-password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                       </div>
                       <div className="form-group">
                            <label>Enter Message: </label>
                            <input type="text"
                            required
                            className="form-control"
                            value={this.state.message}
                            onChange={this.onChangeMessage}
                            />
                       </div>
                       
                       <div className="form-group">
                           <input type="submit"
                            value="add User"
                             className="btn btn-primary"/>
                       </div>
                       </form>  
            </div>
        )
    }
}

