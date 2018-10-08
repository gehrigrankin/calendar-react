import React, { Component } from 'react';
import './App.css';

import Head from './components/Head';
import Month from './components/Month';

class App extends Component {
  
  state = {
    monthArr: [
      {
        name:"January",
        days: 31
      },
      {
        name:"February",
        days: 28
      },
      {
        name:"March",
        days: 31
      },
      {
        name:"April",
        days: 30
      },
      {
        name:"May",
        days: 31
      },
      {
        name:"June",
        days: 30
      },
      {
        name:"July",
        days: 31
      },
      {
        name:"August",
        days: 31
      },
      {
        name:"September",
        days: 30
      },
      {
        name:"October",
        days: 31
      },
      {
        name:"November",
        days: 30
      },
      {
        name:"December",
        days: 31
      }
    ],
    today: {
      weekday: "",
      monthday: 0
    },
    month: "",
    year: ""
  }

  componentWillMount = () => {
    this.setState({
      today: {
        weekday: (new Date()).getDay(),
        monthday:  (new Date()).getDate()
      },
      month: this.state.monthArr[(new Date()).getMonth()],
      year: (new Date()).getFullYear()
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Head 
            month={this.state.month} 
            year={this.state.year}
          />
          <Month 
            monthArr={this.state.monthArr}
            month={this.state.month}
            today={this.state.today}
          />
        </div>
      </div>
    );
  }
}

export default App;
