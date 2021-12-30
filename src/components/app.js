import React, { Component } from 'react';

import Footer from './footer';
import Header from './header';
import ContentWrapper from './contentWrapper'

export default class App extends Component {
  constructor() {
    super();

    this.monthList = [
      "January", 
      "February", 
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December"
    ];
    this.now = this.calculateDateData()
    
    this.state = {
      month: {},
      monthData:[]
    };

    this.handleMonthChange = this.handleMonthChange.bind(this)
  }

  calculateDateData() {
    const now = new Date(2022, 0);
    const month = this.monthList[now.getMonth()]
    const year = now.getFullYear()
    return {month, year}
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/month/get")
    .then((response) => response.json())
    .then((data) => { 
      this.setState({
        monthData: data,
        month: data.filter(
          (month) => 
            month.name === this.now.month && month.year === this.now.year
        )[0],
      });
    });
  }

  handleMonthChange(direction) {
    const currentMonthIndex = this.monthList.indexOf(this.state.month.name);
    const newMonthName = 
      this.monthList[
        direction === 'next' ? currentMonthIndex + 1 : currentMonthIndex - 1]
    const newMonthData = 
      this.state.monthData.filter(
      (month) => month.name === newMonthName
    )[0];
    this.setState({ month: newMonthData })
  }

  render() {
    return (
      <div className='app'>
        <Header 
          monthName={this.state.month.name}
          handleMonthChange={this.handleMonthChange}
        />
        <ContentWrapper />
        <Footer />
        
      </div>
    );
  }
}
