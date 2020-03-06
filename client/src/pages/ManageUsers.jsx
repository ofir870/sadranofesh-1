
import React, { Component } from 'react'
import api from '../api'
import '../style/ManageUsers.css'
import { Link } from 'react-router-dom'
import { NavBar } from './../components'

class GetUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            columns: [],
        }
        this.deleteUser = this.deleteUser.bind(this)
    }
    componentDidMount = async () => {
        await api.getUsers().then(users => {
            this.setState({
                users: users.data.data,
            })
            console.log(' usersList -> render -> users', users)
        })
    }

    deleteUser(id) {
        api.deleteUserById(id).then(() => {
            let index = this.state.users.findIndex((user) => user.id = id)
            let array = this.state.users
            array.splice(index, 1)
            this.setState({
                users: array
            })
        })
    }

    renderTableData() {

            const cond = this.state.users
        
            if(!(cond === undefined)){
            
                return this.state.users.map((users, index) => {
                    const { _id, name, password, message } = users //destructuring
                    console.log(users)
                    return (
                        <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{password}</td>
                    <td>{message}</td>
                    <td  > <input onClick={() => this.deleteUser(_id)} type="button" value="delete" /></td>
                </tr>
            )
        })
    } 
        

    }

    renderTableHeader() {
        
        const cond = this.state.users
        ;
        if(!(cond === undefined)){
            
        let header = [" Id ", "Name", "Password", "Message", " manage"]
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    }
    render() {
   
        const styleObj = {
            align: "center",
            
        }
        return (
            
            <div>
        <NavBar/>
                    <div>
                        <h1 id='title'>טבלת המשתמשים</h1>
                        <table id='users'>
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                        <Link to="/admin/register" className="nav-link">
                            <button className="button"><span>add User </span></button>
                        <button style={styleObj} className="button"><span>ניהול דף</span></button>
                        </Link>}
                        
                    <Link to="/admin" className="nav-link">
                    </Link>
                    </div> 
                        
                        </div>
                        )
       
                     
    }
}
export default GetUsers