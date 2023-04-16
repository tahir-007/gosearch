import React from "react";

const TimeDiffrence = ({ input }) => {
  let currentDate = new Date();
  let inputDate = new Date(input);
  let diff = currentDate - inputDate;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  let hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  let mins = Math.floor(diff / (1000 * 60));
  diff -= mins * (1000 * 60);
  let seconds = Math.floor(diff / 1000);

  if (days < 1) {
    return `${hours}h`;
  } else if (days < 7) {
    return `${days}d`;
  } else if (days < 30) {
    return `${days}d`;
  } else if (days < 365) {
    let months = Math.floor(days / 30);
    return `${months}m`;
  } else {
    let years = Math.floor(days / 365);
    return `${years}y`;
  }
};

export default TimeDiffrence;
