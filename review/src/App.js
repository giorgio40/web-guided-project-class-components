import React, { useState, Component } from "react";

// class App extends React.Component {
class App extends Component {
  // add state through the constructor
  constructor() {
    super();
    this.state = {
      name: "Warren",
      allProperties: true,
    };
  }
  name = "Warren";
  // class properties instead of variable
  render() {
    return (
      <div>
        <h1>Hello {this.name}</h1>
      </div>
    );
  }
}

export default App;
