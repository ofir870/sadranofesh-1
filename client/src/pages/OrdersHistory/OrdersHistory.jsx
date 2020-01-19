
import React, { Component } from 'react'
import api from '../../api'


export default class OrdersHistory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: []
        }}


        componentDidMount = async () => {

            await api.getOrders().then(orders => {
                this.setState({
                    orders: orders.data.data
              
    
                })
                
                console.log(' Aproved-orders-List -> render -> orders', orders)
                          
            })
        }

    render() {
        return (
            <div>
                

            </div>
        )
    }
}





