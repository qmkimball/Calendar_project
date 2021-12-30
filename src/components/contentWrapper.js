import React from 'react';

import CalendarWrapper from './calendarWrapper';

export default function contentWrapper() {
    return(
        <div>
            <h1> Content </h1>
            <CalendarWrapper />
            <CalendarWrapper />
            <CalendarWrapper />
            <CalendarWrapper />
        </div>
    )
}