import React from 'react';



class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            aproved: false,
            isAnswar: false,
            isfromBeerot: null,
            note: "",
            startDate: new Date(),
            price: 0,
            endDate: new Date(),
            users: []
        }
        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.onChangeAproved = this.onChangeAproved.bind(this)
        this.onChangeNote = this.onChangeNote.bind(this)
        this.onChangeStartDate = this.onChangeStartDate.bind(this)
        this.onChangeEndDate = this.onChangeEndDate.bind(this)
        this.onChangeIsAnswar = this.onChangeIsAnswar.bind(this)
        this.onChangeIsFromBeerot = this.onChangeIsFromBeerot.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


    }
    componentDidMount() {
        this.setState({
            users: ['test user'],
            userName: "test user"
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

    onChangeIsFromBeerot(e) {
        this.setState({
            isFromBeerot: e.target.value
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
    onChangeStartDate(date) {
        this.setState({
            startDate: date
        });
    }
    onChangeEndDate(date) {
        this.setState({
            endDate: date
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const order = {
            userName: this.state.name,
            aproved: this.state.aproved,
            isAnswar:this.state.isAnswar,
            isFromBeerot:this.state.isFromBeerot,
            price:this.state.price,
            note: this.state.note,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }


    
        console.log(order);

        // window.location = '/orders'
    }
    render() {
        return (
             <div >
                <h3>all orders</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="col-form-label w-100 text-right">
                    <label>UserName:</label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.userName}
                        onChange={this.onChangeUserName}>
                        {
                            this.state.users.map(function(user){
                                return<option
                                key={user}
                            value={user}>{user}</option>
                            })
                        }
                    </select>
                    </div> 
                <div className="col">
            <label className="col-form-label w-100 text-right">
              האם ההזמנה היא לחבר בארות יצחק?
            </label>
            <select
              className="form-control form-control-sm"
              name="isBeerot"
              value={this.state.isfromBeerot}
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
              </form>



            </div>
        )
    }
}

export default Orders;