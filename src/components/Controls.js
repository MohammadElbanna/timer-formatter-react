import React from "react";
import TIMER_STATE from "../constants/stopwatch";
import styles from "./Controls.css";

const Controls = ({ onReset, onStop, onResume, onLap, timerState }) => {
  return (
    <div className={styles.buttonContainer}>
      {timerState === TIMER_STATE.INITIAL && (
        <button onClick={onResume}>start</button>
      )}

      {timerState === TIMER_STATE.RUNNING && (
        <div>
          <button onClick={onStop}>stop</button>
          <button onClick={onLap}>lap</button>
        </div>
      )}

      {timerState === TIMER_STATE.PAUSED && (
        <div>
          <button onClick={onResume}>resume</button>
          <button onClick={onReset}>reset</button>
        </div>
      )}
    </div>
  );
};

export default Controls;
