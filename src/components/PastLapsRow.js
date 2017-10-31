import React from "react";
import TimeFormatter from "./TimeFormatter";

const PastLapsRow = ({ lapNum, lapTime, totalTime }) => {
  return (
    <tr>
      <td>{lapNum < 10 ? "0" + lapNum : lapNum}</td>
      <td>
        <TimeFormatter time={lapTime} />
      </td>
      <td>
        <TimeFormatter time={totalTime} />
      </td>
    </tr>
  );
};

export default PastLapsRow;
