import React, { Component } from 'react';
import './App.css';

import Head from './components/Head';

class App extends Component {
  
  state = {
    monthArr: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    month: "",
    year: ""
  }

  componentWillMount = () => {
    this.setState({
      month: this.state.monthArr[(new Date()).getMonth()],
      year: (new Date()).getFullYear()
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Head month={this.state.month} year={this.state.year}/>
        </div>
      </div>
    );
  }
}

export default App;
