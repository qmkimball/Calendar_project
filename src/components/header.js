import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
    return( 
        <div className="header-wrapper">
                <FontAwesomeIcon 
                icon={faArrowAltCircleLeft}
                className="button" 
                onClick={() => props.handleMonthChange("previous")} />

            <h1>{props.monthName}</h1>

                <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="button" 
                onClick={() => props.handleMonthChange("next")} />

        </div>
    )
}