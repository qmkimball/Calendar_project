import React from 'react';

export default function Header(props) {
    return( 
        <div style={{border: "3px solid pink", borderRadius: "3px"}}>
            <button onClick={() => props.handleMonthChange("previous")}>
                Previous
            </button>
            <h1>{props.monthName}</h1>
            <button onClick={() => props.handleMonthChange("next")}>
                Next
            </button>
        </div>
    )
}