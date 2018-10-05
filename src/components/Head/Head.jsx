import React from 'react';

import './Head.css'

const Head = (props) => {
    return (
        <div className="Head">
            <h1 className="title">{props.month} {props.year}</h1>
        </div>
    )
}
export default Head