import React, { Component } from "react";
import ItemList from "./components/ToDoList";
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ItemList />
      </div>
    );
  }
}

export default App;