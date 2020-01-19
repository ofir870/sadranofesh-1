import React from 'react';
import './calender.css';
import Calendar from 'react-calendar';


class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            
        }
    }


    render() {

        return (
            <div className='calender'>

             

                <div className="calender-container">
                    <Calendar calendarType="Hebrew"
                        // activeStartDate={this.state.date}
                        selectRange={true}
                        onChange={this.props.onChange}
                        onClickDay={this.props.onClickDay}
                        value={this.props.date}

                        // tileDisabled={(e)=>{
                        //     {console.log(e)}
                        // }}

                    />
                </div>




            </div>
        )
    }
}

export default Calender;