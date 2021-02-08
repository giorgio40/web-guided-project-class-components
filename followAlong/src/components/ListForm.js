import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newItemName: "",
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke
    this.setState({
      newItemName: e.target.value,
    });
  };

  // class property to submit form
  handleSubmit = () => {
    this.props.addItem();
  };

  render() {
    return (
      <form>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.newItemName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
