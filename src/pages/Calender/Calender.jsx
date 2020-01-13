import React from 'react';
import './calender.css';
import Calendar from 'react-calendar';


class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            
        }
    }


    render() {

        return (
            <div className='calender'>

             

                <div className="calender-container">
                    <Calendar calendarType="Hebrew"
                        activeStartDate="true"
                        selectRange="true"
                        onChange={this.props.onChange}
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