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

  // class properties instead of variable
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
