import React from "react";
import ReactDOM from "react-dom";

import GroceryList from "./components/GroceryList";
import ListForm from "./components/ListForm";
import "./styles.scss";

const groceries = [
  {
    name: "Bananas",
    id: 123,
    purchased: false,
  },
  {
    name: "Torillas",
    id: 124,
    purchased: false,
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false,
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false,
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false,
  },
  {
    name: "Granola",
    id: 1248,
    purchased: false,
  },
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      groceries: groceries,
      date: "",
      anotherStateProperty: {},
    };
  }

  // Class methods to update state
  toggleItem = (clickedItemId) => {
    const newGroceries = this.state.groceries.map((item) => {
      if (item.id === clickedItemId) {
        return {
          ...item,
          purchased: !item.purchased,
        };
      } else {
        return item;
      }
    });
    console.log(newGroceries);

    this.setState({
      groceries: newGroceries,
    });
  };

  addItem = (itemName) => {
    // logic to add an item to the groceryList state
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <GroceryList groceries={groceries} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
