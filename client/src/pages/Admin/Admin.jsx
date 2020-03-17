import React from 'react';
import './admin.css';
import { Link } from 'react-router-dom'
import Orders from '../Orders';
import Calendar from 'react-calendar';
import { NavBar } from '../../components'
import api from '../../api';

class Admin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            message: "",
          
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeMessage = this.onChangeMessage.bind(this)
    }

 
    onSubmit = async (e) => {
        e.preventDefault();
            
        const message = {
            globalMessages: this.state.message
           
        }


        // order.startDate = order.startDate.toDateString()
        // order.endDate = order.endDate.toDateString()
        // if (order.isFromBeerot === "בחר") {
        //     alert("ההזמנה לא נשלחה: נא לבחור האם אתה חבר")
        //     return
        // }
        await api.createGlobalMessage(message).then(

         console.log(message)
        )
        alert("message Added sucssafuly")

       
        window.location.reload()
    }


    onChangeMessage(e) {

        this.setState({
            message: e.target.value
        });

    }


    render() {

       
    return(
            <div className = "wrapper" >
            <NavBar />

            
            <form className="messages-form" onSubmit={this.onSubmit}>

                <input type="text" onChange={this.onChangeMessage}/>
                <button type="submit">לחץ להוספת הודעה כללית</button>
            </form>
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