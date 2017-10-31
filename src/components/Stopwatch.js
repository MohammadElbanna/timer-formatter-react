import React, { Component } from "react";
import TIMER_STATE from "../constants/stopwatch";
import TimeFormatter from "./TimeFormatter";
import PastLapsDisplayer from "./PastLapsDisplayer";
import Controls from "./Controls";

class Stopwatch extends Component {
  state = {
    totalTime: 0,
    lapTime: 0,
    pastLaps: [],
    timerState: TIMER_STATE.INITIAL
  };

  intervalId = 0;

  updateTime = interval => {
    this.setState(previousState => ({
      totalTime: previousState.totalTime + interval,
      lapTime: previousState.lapTime + interval
    }));
  };

  onStop = () => {
    this.setState({
      timerState: TIMER_STATE.PAUSED
    });
    clearInterval(this.intervalId);
  };

  onResume = () => {
    this.setState({
      timerState: TIMER_STATE.RUNNING
    });
    this.intervalId = setInterval(this.updateTime, 10, 10);
  };

  onLap = () => {
    const lapTime = this.state.lapTime;
    const totalTime = this.state.totalTime;
    const newLap = {
      lapTime: lapTime,
      totalTime: totalTime
    };
    this.setState({
      pastLaps: [...this.state.pastLaps, newLap],
      lapTime: 0
    });
  };

  onReset = () => {
    this.setState({
      timerState: TIMER_STATE.INITIAL,
      lapTime: 0,
      totalTime: 0,
      pastLaps: []
    });
  };

  render() {
    let { totalTime, lapTime, pastLaps, timerState } = this.state;
    return (
      <div>
        <h1>
          <TimeFormatter time={totalTime} />
        </h1>
        <h3>
          <TimeFormatter time={lapTime} />
        </h3>

        <PastLapsDisplayer laps={pastLaps} />

        <Controls
          timerState={timerState}
          onReset={this.onReset}
          onLap={this.onLap}
          onResume={this.onResume}
          onStop={this.onStop}
        />
      </div>
    );
  }
}

export default Stopwatch;
