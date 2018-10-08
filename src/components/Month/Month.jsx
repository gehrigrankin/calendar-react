import React from 'react';
import Day from '../Day'

import './Month.css'


const Month = (props) => {
    const startDay = (today) => {
        let remainder = props.today.monthday + 7 % 7;

        let startWeek = props.today.weekday - (remainder - 1)
        
        if (startWeek < 0) {
            return 7 + startWeek;
        }
        else {
            return startWeek
        }
    }

    const daysLastMonth = () => {
        // let monthIndex = props.monthArr.findIndex(props.month)

        let monthIndex = props.monthArr.findIndex((x) => {
            return x.name === props.month.name
        })

        if (monthIndex === 0){
            return 31;
        }
        else {
            return props.monthArr[monthIndex].days
        }
    }

    const populateDays = () => {
        let days = []

        for (let i = 0; i < startDay(); i++){
            let endLastMonth = daysLastMonth() - startDay()

            days.push(
                <Day day={endLastMonth + i} grey={true}/>
            )
        }

        for (let i = 1; i < props.month.days + 1; i++){
            days.push(<Day day={i} grey={false}/>)
        }

        return days;
    }

    return (
        <div className='Month'>
            {
                populateDays()
            }
        </div>
    )
}
export default Month
