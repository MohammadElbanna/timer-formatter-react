import React, { Component } from "react";
import logo from "./logo.svg";
import Stopwatch from "./components/Stopwatch";
import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
