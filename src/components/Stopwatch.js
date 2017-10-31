import React, { Component } from "react";
import TIMER_STATE from "../constants/stopwatch";

class Stopwatch extends Components {
  state = {
    totalTime: 0,
    currentLapTime: 0,
    pastLaps: undefined
  };

  render() {
    return <div>Stopwatch</div>;
  }
}

export default Stopwatch;
