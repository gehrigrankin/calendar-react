import React from 'react';

import './Head.css'

const Head = (props) => {
    return (
        <div className="Head">
            <h1 className="title">{props.month} {props.year}</h1>

            <div className="daysOfWeek columns">
                <div className="column">Sunday</div>
                <div className="column">Monday</div>
                <div className="column">Tuesday</div>
                <div className="column">Wednesday</div>
                <div className="column">Thursday</div>
                <div className="column">Friday</div>
                <div className="column">Saturday</div>
            </div>
        </div>
    )
}
export default Head