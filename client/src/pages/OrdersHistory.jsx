
import React, { Component } from 'react'
import api from '../api'
import { NavBar } from './../components'

export default class OrdersHistory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: []
        }
    }
    componentDidMount = async () => {
        await api.getOrders().then(orders => {
            if (orders.data.data.length > 0){
            this.setState({
                orders: orders.data.data
            })
            console.log(' Aproved-orders-List -> render -> orders', orders)
        }
        })

    
    }

    deleteOrder(id) {
        api.deleteOrderById(id).then(() => {
            let index = this.state.orders.findIndex((order) => order.id = id)

            let array = this.state.orders
            array.splice(index, 1)
            this.setState({
                orders: array
            })
        })
    }
    renderTableData() {

        return this.state.orders.map((orders, index) => {
            const { startDate, endDate, userName, aproved, note, createdAt,_id } = orders //destructuring
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{startDate}</td>
                    <td>{endDate}</td>
                    <td>{userName}</td>
                    <td>{note}</td>
                    <td>{aproved}</td>
                    <td>{createdAt}</td>
                    <td><input onClick={() => this.deleteOrder(_id)} type="button" value="הסר" /></td>

                    {/* <td  > <input onClick={() => this.deleteUser(_id)} type="button" value="delete" /></td> */}
                </tr>
            )
        })

    }

    renderTableHeader() {
        let header = ["מספר ", "תראיך התחלה", "תאריך סיום", "שם משתמש", " הודעה", "האם ההזמנה אושרה", "תאריך הזמנה"]
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    render() {

        return (

            <div>
                <NavBar />
                <h1 id='title'>היסטוריית הזמנות</h1>
                <table id='users'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}





