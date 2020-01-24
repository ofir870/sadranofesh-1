import React, { Component } from 'react'
import Calendar from 'react-calendar';
import "./home.css";
import api from '../../api';
import { Button } from 'react-bootstrap';
import Popup from "reactjs-popup";

export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            userName: "michal",
            aproved: "waiting",
            isfromBeerot: null,
            note: "",
            startDate: new Date(),
            price: 0,
            endDate: new Date(),
            orders: []

        }

        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.onChangeAproved = this.onChangeAproved.bind(this)
        this.onChangeNote = this.onChangeNote.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangeIsAnswar = this.onChangeIsAnswar.bind(this)
        this.onChangeIsFromBeerot = this.onChangeIsFromBeerot.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.changePrice = this.changePrice.bind(this)


    }

    componentDidMount = async () => {

        console.log(this.state.userName)
        await api.getOrdersByUserName(this.state.userName).then(orders => {
            console.log(orders)

            this.setState({
                orders: orders.data.data

            })


            console.log(' Aproved-orders-List -> render -> orders', orders)
        })
    }

    deleteOrder(id) {
        api.deleteUserById(id).then(() => {
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
            const { _id, startDate, endDate, aproved, note } = orders //destructuring
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{startDate}</td>
                    <td>{endDate}</td>
                    {/* { aproved === "אושר" &&
                    <td style="backgroung-color:`green`">{aproved}</td>
                    } */}
                    <td>{note}</td>
                    <td >{aproved}</td>



                    <td  > <input onClick={() => this.deleteOrder(_id)} type="button" value="בטל" /></td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = ["מספר ", "תראיך התחלה", "תאריך סיום", " הודעה", "האם ההזמנה אושרה", "בטל"]
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    onChangeUserName(e) {
        this.setState({
            userName: e.target.value
        });

    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeIsAnswar(e) {
        this.setState({
            isAnswar: e.target.value
        });
    }
    changePrice(isMemberOfBeerot) {
        if (isMemberOfBeerot === "true") {
            this.setState({
                price: 50
            })
        } else {
            this.setState({
                price: 350
            })
        }
    }
    onChangeIsFromBeerot(e) {

        this.setState({
            isFromBeerot: e.target.value,

        });
        this.changePrice(e.target.value)



    }
    onChangeNote(e) {
        this.setState({
            note: e.target.value
        });
    }
    onChangeAproved(e) {
        if (this.state.aproved === false) {
            this.setState({
                aproved: true
            });
        } else {
            this.setState({
                aproved: false
            });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const order = {
            userName: this.state.userName,
            aproved: this.state.aproved,
            isFromBeerot: this.state.isFromBeerot,
            price: this.state.price,
            note: this.state.note,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }

        order.startDate = order.startDate.toDateString()
        order.endDate = order.endDate.toDateString()
        if (order.isFromBeerot === "בחר") {
            alert("ההזמנה לא נשלחה: נא לבחור האם אתה חבר")
            return
        }
        await api.createOrder(order).then(

            console.log(' order', order)

        )
        alert("Order Added sucssafuly")

        this.setState({
            startDate: new Date(),
            endDate: new Date(),
            price: "",
            note: "",
            isFromBeerot: ""
        })
        window.location.assign("http://localhost:3000/home")
    }

    onChange = date => {


        this.setState({
            startDate: date[0],
            endDate: date[1]
        })


    }

    render() {
        return (
            <div>

                <form className="order-form" onSubmit={this.onSubmit}>
                    <div className="calender-wrapper">
                        <Calendar
                            activeStartDate={new Date()}
                            selectRange={true}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="button-wrapper">
                        <Popup trigger={<Button onClick={this.onClickButton} variant="secondary" size="lg">
                            להזמנה בחר תאריכים ולחץ עליי
  </Button>} position="bottom center" >
                            <label className="w-100 text-right">
                                האם ההזמנה היא לחבר בארות יצחק?
            </label>

                            <div className="col"  >
                                <select
                                    dir="rtl"
                                    className="form-control form-control-sm"
                                    name="isBeerot"
                                    required
                                    onChange={this.onChangeIsFromBeerot}
                                >
                                    <option dir="rtl">בחר</option>
                                    <option value={true}>כן</option>
                                    <option value={false}>לא</option>
                                </select>
                            </div>
                            <div className="form-group item-centerd">
                                <label className="w-100 text-right">
                                    שלח הודעה למנהל
            </label>

                                <textarea className="form-group text-right" name="message"
                                    value={this.state.note} required onChange={this.onChangeNote}  >
                                </textarea>
                            </div>

                            <div className="form-group">

                                <input type="submit" value="create order" className="btn btn-primary"></input>

                            </div>
                            <h5 className="text-right">  מחיר הדירה ליום: {this.state.price}</h5>
                        </Popup>
                    </div>
                </form>
                <div>
                    <h1 id='title'> ההזמנות שלי </h1>
                    <table id='users'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
