import React, { Component ,useState} from 'react'
import Calendar from 'react-calendar';
import "./home.css";
import api from '../../api';
import { Button } from 'react-bootstrap';
import Popup from "reactjs-popup";
import { NavBar } from '../../components'
import Moment from 'react-moment';
import { UserContext } from '../../model/context/userContext';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: localStorage.getItem("name"),
            aproved: "waiting",
            isfromBeerot: null,
            note: "",
            startDate: new Date(),
            price: 0,
            endDate: new Date(),
            orders: [],
            aprovedOrders: [],
            datesArray: [],
            color: "red",
            value: "",
            disabledDates: []
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
        this.onClickButton = this.onClickButton.bind(this)
        this.usingState = this.usingState.bind(this)

    }

    componentDidMount = () => {

        api.getOrdersByUserName(this.state.userName).then(orders => {

            this.setState({ orders: orders.data.data })
        })

        // .then(api.getAprovedOrders().then(orders => {

        // }))
    }


     usingState() {
     const [state, setstate] = useState("hellelelelelelele") 
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
            //  check the number of days bitween this date to the startdate of order
            //  then use this to validate 
            var date_diff_indays = function (date1, date2) {
                let dt1 = new Date(date1);
                let dt2 = new Date(date2);
                return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
            }
            let daysBtwn = date_diff_indays(new Date(), this.state.startDate)

            if (this.state.startDate === "") {
                alert("בבקשה בחר תאריכים שוב")
            }


            if (daysBtwn > 14) {

                return (
                    alert("אפשר להזמין לא לחבר רק כשבועיים מראש נא לבחור תאריכים שוב"),
                    window.location.reload()
                )
            }

            let dateArray = [];
            let startDate = this.state.startDate
            let endDate = this.state.endDate

            while (startDate <= endDate) {
                dateArray.push(startDate)
                startDate = startDate.addDays(1);
            }
            let isTrue = false;

            for (let i in dateArray) {
                var day = dateArray[i].getDay();
                var isWeekend = (day === 5) || (day === 6);
                // הזמנה היא בסוף שבוע?
                if (isWeekend === true) {
                    isTrue = true
                }

            }

            if (daysBtwn > 3 || isTrue) {
                return (
                    alert("אפשר להזמין את הדירה לסופש רק במידה ואתה מזמין לחבר קיבוץ או 3 ימים לפני"),
                    window.location.reload()
                )
            }

            this.setState({
                price: 300
            })
        }
    }
    onChangeIsFromBeerot(e) {

        if (this.state.startDate < new Date()) {
            alert("אין אפשרות להזמין את הדירה לזמן עבר")
            window.location.reload()
        }
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

        window.location.reload()
    }       
    onClickButton() {

    }
    onChange = date => {

        // const theme = this.context
         // console.log(theme)
     
        let disDates = this.state.datesArray;
        let onChangeDateArray = [];
        let newDate = date[0]
        let newEndDate = date[1]

        while (newDate <= newEndDate) {
            onChangeDateArray.push(newDate)
            newDate = newDate.addDays(1);
        }

        for (let i in onChangeDateArray) {
            for (let j in disDates) {
                if (onChangeDateArray[i].getTime() === disDates[j].getTime() === true) {

                    return (
                        alert("בחרת בתאריכים תפוסים בחר שוב."),
                        window.location.reload()
                    )
                }
            }
        }
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
                    for (let j in dateArray) {
                        this.state.datesArray.push(dateArray[j])
                    }
                }
            })
        }

        return (

            <div>
                {/* <UserContext.Consumer> */}

                <NavBar />

                <form className="order-form" onSubmit={this.onSubmit}>
                    <div className="calender-wrapper">
                        <Calendar
                            activeStartDate={new Date()}
                            selectRange={true}
                            onChange={this.onChange}
                            tileDisabled={({ date, view }) =>
                                (view === 'month') && // Block day tiles only
                                this.state.datesArray.some(
                                    disabledDate =>
                                        date.getFullYear() === disabledDate.getFullYear() &&
                                        date.getMonth() === disabledDate.getMonth() &&
                                        date.getDate() === disabledDate.getDate()
                                )
                            }
                        />
                    </div>
                    <div className="date-div">
                        <div>תאריך התחלה : </div>
                        <Moment format="DD/MM/YYYY" >
                            {new Date(this.state.startDate)}
                        </Moment>
                    </div>
                    <div className="date-div">
                        <p>תאריך סיום : </p>
                        <Moment format="DD/MM/YYYY">
                            {new Date(this.state.endDate)}
                        </Moment>
                    </div>

                    <div className="button-wrapper">
                        <Popup onChange={this.onClickButton} trigger={<Button variant="secondary" size="lg">
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
                                </div> :<div></div>
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
                {/* </UserContext.Consumer> */}
            </div>
        )
    }
}
