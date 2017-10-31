import React from "react";

function formatElapsedTime(elapsedMilliseconds) {
  if (!Number.isFinite(elapsedMilliseconds)) {
    return "00:00:00";
  }
  if (elapsedMilliseconds < 0) {
    return "00:00.00";
  }

  const hours = Math.floor(elapsedMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor(
    (elapsedMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds =
    ((elapsedMilliseconds % (1000 * 60 * 60)) % (1000 * 60)) / 1000;

  const adjustedHours = adjustIfLessThanTen(hours);
  const adjustedMinutes = adjustIfLessThanTen(minutes);
  const adjustedSeconds = adjustSecondsNumber(seconds);

  return hours === 0
    ? `${adjustedMinutes}:${adjustedSeconds}`
    : `${adjustedHours}:${adjustedMinutes}:${adjustedSeconds}`;
}

function adjustIfLessThanTen(num, isFraction) {
  if (num < 10) {
    return isFraction ? `${num}0` : `0${num}`;
  }
  return num + "";
}

function adjustSecondsNumber(seconds) {
  let secondsText = adjustIfLessThanTen(seconds);

  let secondsNumberArr = secondsText.split(".");
  if (secondsNumberArr.length > 1) {
    const fractionPart = secondsNumberArr[1].slice(0, 3);
    const adjustedFractionalPart =
      fractionPart.length < 2
        ? adjustIfLessThanTen(+secondsNumberArr[1].slice(0, 3), true)
        : fractionPart;
    return `${secondsNumberArr[0]}.${adjustedFractionalPart}`;
  }
  return `${secondsText}.00`;
}

const TimeFormatter = ({ time }) => {
  return <span>{formatElapsedTime(time)}</span>;
};

export default TimeFormatter;
