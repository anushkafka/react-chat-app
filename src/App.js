import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chatroom from "./components/chatroom";
import db from "./utility/db";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chatroom />
      </div>
    );
  }
}

export default App;
