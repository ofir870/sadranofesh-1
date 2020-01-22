import React from 'react';
import './admin.css';
import { Link } from 'react-router-dom'
import Orders from '../Orders';


class Admin extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="links">
                    <Link to="/admin/ManageUsers" className="nav-link">
                        <button className="button"><span>ניהול משתמשים</span></button>
                    </Link>
                    <Link to="/admin/ordershistory" className="nav-link">
                        <button className="button"><span>היסטוריית הזמנות</span></button>
                    </Link>
                </div>
                <div className="order">
                    <Orders />
                </div>
            </div>



        )
    }
}

export default Admin;