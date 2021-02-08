import React from "react";

const Person = (props) => {
  return (
    <div>
      <h1>Hello {props.name}.</h1>
      <p>
        {props.name} is an unbelievable name. Stunning! Never change,{" "}
        {props.name}.
      </p>
    </div>
  );
};

class AppClass extends React.Component {
  // cannot use hooks inside class components 😭
  constructor() {
    super();
    this.state = {
      name: "Warren",
      count: 0,
      reactIsAwesome: true,
    };
  }

  handleNameButtonClick = (e) => {
    // class version of hooks "setter" functions
    // Make a copy of the state
    this.setState({
      name: "Allison",
    });
  };

  render() {
    return (
      <div>
        <Person name={this.state.name} />
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
