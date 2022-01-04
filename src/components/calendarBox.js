import React, { Component } from 'react';

export default class CalendarBox extends Component {
    constructor(props) {
        super(props)

        const reminder = props.month 
            ? props.month.reminders.filter
                (reminder => reminder.date === props.date
                )[0]  
            : undefined;

        
        this.state = {
            reminderExists: reminder ? true : false,
            contentInput: reminder ? reminder.content : ""
        };
    }

    handleSubmit() {
        if (!this.state.reminderExists && this.state.contentInput !== "") {
            fetch("https://api-calendar-qmk.herokuapp.com/reminder/add", {
                method: "POST",
                headers: { "content-type": "application/json"},
                body: JSON.stringify({
                    content: this.state.contentInput,
                    date: this.props.date,
                    month_id: this.props.month.id
                })
                .then(response => response.json())
                .then(data => {
                    if (typeof data =="string") {
                        console.log(data)
                    }
                    
                    else {
                        this.setState({
                            reminderExists: true
                        });
                    }
                })

            });
        }
        else if (this.state.reminderExists && this.state.contentInput !== "") {
        fetch(
            `https://api-calendar-qmk.herokapp.com/reminder/update/${this.props.month.id}/${this.props.date}`, 
            {
                method: "PUT",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    content: this.state.contentInput,
                }),
            })
            .then(response => response.json()) 
            .then(data => {
                if (typeof data === "string") {
                    console.log(data)
                }
            })
            .catch((error) => console.log("Error updating reminder", error));
        }    
    }

    render() {
       return(
            <div 
                className={this.props.overflow ? "calendar-box overflow" : "calendar-box"
                }>
                <span>{this.props.date}</span>
                <textarea
                    disabled={this.props.overflow}
                    onBlur={this.handleSubmit}
                    value={this.state.contentInput}
                    onChange={(event => this.setState({contentInput:event.target.value})).bind(this)}
                ></textarea>
            </div>
        );
    }
} 
   
    