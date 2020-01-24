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


        // const disabledDates = [
        //     new Date(2020, 1, 1),
        //     new Date(2020, 1, 11),
        //   ];
        return (
            <div className='calender'>
                <div className="calender-container">
                    <Calendar calendarType="Hebrew"
                   
                        selectRange={true}
                        onChange={this.props.onChange}
                        onClickDay={this.props.onClickDay}
                        value={this.props.date}

                        // tileDisabled={({activeStartDate,date, view}) =>
                        // (view === 'day') && // Block day tiles only
                        // disabledDates.some(disabledDate =>
                        //   date.getFullYear() === disabledDate.getFullYear() &&
                        //   date.getMonth() === disabledDate.getMonth() &&
                        //   date.getDate() === disabledDate.getDate()
                        // )}

               
                    />
                </div>




            </div>
        )
    }
}

export default Calender;