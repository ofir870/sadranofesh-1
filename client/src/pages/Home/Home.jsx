import React, { Component } from 'react'
import { Calender } from '../'
import "./home.css"

export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            date: {
                0: new Date(),
                1: new Date(),
            },

            userName: "",
            aproved: false,
            isAnswar: false,
            isfromBeerot: null,
            note: "",
            startDate: new Date(),
            price: 0,
            endDate: new Date(),

        }

        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.onChangeAproved = this.onChangeAproved.bind(this)
        this.onChangeNote = this.onChangeNote.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
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

    onSubmit(e) {
        e.preventDefault();
        const order = {
            userName: this.state.userName,
            aproved: this.state.aproved,
            isAnswar: this.state.isAnswar,
            isFromBeerot: this.state.isFromBeerot,
            price: this.state.price,
            note: this.state.note,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }



        console.log(order);

        // window.location = '/orders'
    }

    onChangeDate = date => {

        this.setState({ date })

        this.setState({
            startDate: this.state.date[0],
            endDate: this.state.date[1]
        })
    }

    render() {
        return (
            <div>

                <form className="order-form" onSubmit={this.onSubmit}>
                    <div className="calender-wrapper">
                        <Calender date={this.state.date[0]} onChange={this.onChangeDate} />
                    </div>
                    <div>
                        <label className="w-100 text-right">
                            שם משתמש
            </label>
                        <input

                            className="form-group"
                            name="username"
                            value={this.state.userName}
                            required
                            onChange={this.onChangeUserName}  >
                        </input>
                    </div>

                    <label className="w-100 text-right">
                        האם ההזמנה היא לחבר בארות יצחק?
            </label>
                    <div className="col">
                        <select
                            className="form-control form-control-sm"
                            name="isBeerot"
                            value={this.state.isfromBeerot}
                            required
                            onChange={this.onChangeIsFromBeerot}
                        >
                            <option value="">Select here...</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
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
