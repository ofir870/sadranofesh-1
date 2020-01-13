import React from 'react';
import './admin.css';
import { Register, GetUsers } from '../'
import { Link } from 'react-router-dom'


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }
    render() {
        return (
            <div className="wrapper">hello Admin
           <Register />
                
                <GetUsers />
               
                <Link to="/orders" className="nav-link">
                    הזמנות
                            </Link>

            </div>
        )
    }
}

export default Admin;