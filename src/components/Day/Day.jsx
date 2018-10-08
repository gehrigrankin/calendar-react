import React from 'react';

import './Day.css'

const Day = (props) => {
    return (
        <div className='Day'>
            <span>{props.day}</span>
        </div>
    )
}
export default Day
