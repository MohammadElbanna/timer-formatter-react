import React from "react";
import PastLapsRow from "./PastLapsRow";

const PastLapsDisplayer = ({ laps }) => {
  return (
    <table style={{ display: laps.length ? "inline-block" : "none" }}>
      <tbody>
        {[...laps].reverse().map((lap, index) => {
          let lapNum = laps.length - index - 1;
          return (
            <PastLapsRow
              key={lapNum}
              lapNum={lapNum}
              lapTime={lap.lapTime}
              totalTime={lap.totalTime}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default PastLapsDisplayer;
