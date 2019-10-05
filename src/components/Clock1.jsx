import React, { Component } from "react";

// Example of a Clock with a regular state (and class component)
export default class Clock1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: new Date()
    };
  }
  render() {
    return <div className="Clock">{this.state.timer.toLocaleTimeString()}</div>;
  }
  componentDidMount() { // Trigger after the 1st render
    this.intervalId = setInterval(() => {
      this.setState({
        timer: new Date()
      });
    }, 1000);
  }
  componentWillUnmount() { // Trigger just before destroying the component
    clearInterval(this.intervalId);
  }
}
