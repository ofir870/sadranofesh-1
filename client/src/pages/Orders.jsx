
import React, { Component } from 'react'
import api from '../api'
import '../style/ManageUsers.css'


class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: []
        }
        this.updateOrderTrue = this.updateOrderTrue.bind(this)
        this.orderNotAproved = this.updateOrderFalse.bind(this)
    }
    componentDidMount = async () => {
        await api.getNotAprovedOrders().then(orders => {
            console.log(orders)

            this.setState({
                orders: orders.data.data

            })


            console.log(' Aproved-orders-List -> render -> orders', orders)
        })
    }


    updateOrderTrue = async (id) => {

        const aproved = "true"
        const payload = { aproved }

        await api.ordersAproved(id, payload).then(res => {

            let index = this.state.orders.findIndex((order) => order.id = id)
            let array = this.state.orders

            array.splice(index, 1)

            this.setState({
                orders: array
            })
        })
    }
    updateOrderFalse = async (id) => {
        const aproved = "false"
        const payload = { aproved }

        await api.ordersAproved(id, payload).then(res => {

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
                const { _id, startDate, endDate, userName, aproved, note, createdAt } = orders //destructuring
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{startDate}</td>
                        <td>{endDate}</td>
                        <td>{userName}</td>
                        <td>{note}</td>
                        <td>{aproved}</td>
                        <td>{createdAt.split("T")[0]}</td>

                        <td  > <input onClick={() => this.updateOrderTrue(_id, aproved)} type="button" value="אשר" /></td>
                        <td  > <input onClick={() => this.updateOrderFalse(_id, aproved)} type="button" value="בטל" /></td>
                    </tr>
                )
            })
     
    }

    renderTableHeader() {
        let header = ["מספר ", "תראיך התחלה", "תאריך סיום", "שם משתמש", " הודעה", "האם ההזמנה אושרה", "תאריך הזמנה", "אשר", "בטל"]
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    render() {


        return (

            <div>
                <h1 id='title'>  הזמנות לאישור </h1>
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
export default Orders