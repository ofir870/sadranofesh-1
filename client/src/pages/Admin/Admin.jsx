import React from 'react';
import './admin.css';
import {OrdersHistory } from '../'
import { Link } from 'react-router-dom'


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }
    render() {
        return (
            <div className="wrapper">
                <Link to="/admin/getUsers" className="nav-link">
                    ניהול משתמשים
                            </Link>

           <OrdersHistory />

                


            </div>
        )
    }
}

export default Admin;