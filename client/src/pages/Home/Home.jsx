import React, { Component } from 'react'
import Calendar from 'react-calendar';
import "./home.css"
import api from '../../api'

export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            userName: "ofir",
            aproved: "waiting",
            isfromBeerot: null,
            note: "",
            startDate: new Date(),
            price: 0,
            endDate: new Date(),

        }

        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.onChangeAproved = this.onChangeAproved.bind(this)
        this.onChangeNote = this.onChangeNote.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangeIsAnswar = this.onChangeIsAnswar.bind(this)
        this.onChangeIsFromBeerot = this.onChangeIsFromBeerot.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


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

    onChangeIsFromBeerot(e) {
        this.setState({
            isFromBeerot: e.target.value,
            price: 10 * 10

        });

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

                         selectRange={true}
                         onChange={this.onChange}
                     
                      />
                    </div>

                    <label className="w-100 text-right">
                        האם ההזמנה היא לחבר בארות יצחק?
            </label>
                    <div className="col">
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
                    <div>
                        <label className="w-100 text-right">
                            שלח הודעה למנהל
            </label>
                        <textarea

                            className="form-group text-right"
                            name="message"
                            value={this.state.note}
                            required
                            onChange={this.onChangeNote}  >
                        </textarea>
                    </div>

                    <div className="form-group">

                        <input type="submit" value="create order" className="btn btn-primary"></input>

                    </div>

                    <h4>price:{this.state.price}</h4>
                </form>

                <div>
                    <h3>start:{this.state.startDate.toDateString()} </h3><h3>end:{this.state.endDate.toDateString()}</h3>
                </div>
            </div>







        )
    }
}
