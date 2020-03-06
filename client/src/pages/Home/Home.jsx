import React, { Component } from 'react'
import Calendar from 'react-calendar';
import "./home.css";
import api from '../../api';
import { Button } from 'react-bootstrap';
import Popup from "reactjs-popup";
import { NavBar } from '../../components'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "michal",
            aproved: "waiting",
            isfromBeerot: null,
            note: "",
            startDate: "",
            price: 0,
            endDate: "",
            orders: [],
            aprovedOrders: [],
            datesArray: [],
            color: "red",
            value:""
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

    componentDidMount = () => {

        api.getOrdersByUserName(this.state.userName).then(orders => {

            this.setState({ orders: orders.data.data })
        })

            .then(api.getAprovedOrders().then(orders => {
                console.log(orders)
            }))
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

            const { _id, startDate, endDate, aproved, note } = orders //destructuring
            if (aproved === "true") {
                return (

                    <tr style={{ backgroundColor: "#569834cd" }} key={index}>
                        <td>{index + 1}</td>
                        <td>{startDate}</td>
                        <td>{endDate}</td>
                        <td>{note}</td>
                        <td >{aproved}</td>
                        <td  > <input onClick={() => this.deleteOrder(_id)} type="button" value="בטל" /></td>
                    </tr>

                )
            } if (aproved === "false") {
                return (

                    <tr style={{ backgroundColor: "#EA413A" }} key={index}>
                        <td>{index + 1}</td>
                        <td>{startDate}</td>
                        <td>{endDate}</td>
                        <td>{note}</td>
                        <td  >{aproved}</td>
                        <td  > <input onClick={() => this.deleteOrder(_id)} type="button" value="בטל" /></td>
                    </tr>

                )
            }

            if (aproved === "waiting") {
                return (

                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{startDate}</td>
                        <td>{endDate}</td>
                        <td>{note}</td>
                        <td >{aproved}</td>
                        <td  > <input onClick={() => this.deleteOrder(_id)} type="button" value="בטל" /></td>
                    </tr>

                )
            }
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
        let array = this.state.disabledDate.data.data
        console.log(array)
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
        let value = e.target.value
        if (value === 'true') {
            value = true
        } else {
            value = false;
        };

        this.setState({
            isFromBeerot: value,

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

        console.log("hello")
    
        console.log(date)   

let chosedDates = [];

    api.getAprovedOrders().then(orders => {
        console.log([chosedDates]+ ":::::: >>>>>>>>>>> chosed dates")
        console.log(this.state.datesArray +":::::: disabled dates")

        
    })
        this.setState({
            startDate: date[0],
            endDate: date[1]
        })
        
    }

    render() {

//get all aproved dates and disable them
        Date.prototype.addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }

        let disabledDates = [];
        if (this.state.datesArray.length === 0) {
            api.getAprovedOrders().then(orders => {
                for (let i in orders.data.data) {
                    let newStartdate = new Date(orders.data.data[i].startDate)
                    let newEndDate = new Date(orders.data.data[i].endDate)

                    var dateArray = [];
                    while (newStartdate <= newEndDate) {
                        dateArray.push(newStartdate)
                        newStartdate = newStartdate.addDays(1);
                    }

                    disabledDates = dateArray;
                    this.state.datesArray.push(dateArray)

                }

                console.log([disabledDates]+ ":::::: disabled dates")
                console.log(this.state.datesArray +":::::: chosed dates")

            })
        }

        return (
            <div>
            <NavBar/>
                
                <form className="order-form" onSubmit={this.onSubmit}>
                    <div className="calender-wrapper">
                        <Calendar
                            activeStartDate={new Date()}
                            selectRange={true}
                            onChange={this.onChange}
                        
                            tileDisabled={({ date, view }) =>
                                (view === 'month') && // Block day tiles only

                                this.state.datesArray.some(disabledDate => disabledDate.some(disabledDate =>
                                    date.getFullYear() === disabledDate.getFullYear() &&
                                    date.getMonth() === disabledDate.getMonth() &&
                                    date.getDate() === disabledDate.getDate()
                                ))
                            }
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
                            {typeof this.state.isFromBeerot === "boolean" ?

                                <div>
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

                                        <h5 className="text-right">  מחיר הדירה ליום: {this.state.price}</h5>
                                    </div>

                                </div>

                                :

                                <div>

                                </div>
                            }
                        </Popup>
                    </div>
                </form>
                <div>
                    <h1 id='title'> ההזמנות שלי </h1>
                    {this.state.isfromBeerot}
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
