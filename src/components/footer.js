import React from 'react';

export default function Footer(props) {
    return(
        <div stlye={{ border: "2px solid green"}}>
            <h1>{props.monthYear}</h1>
        </div>

    )
}