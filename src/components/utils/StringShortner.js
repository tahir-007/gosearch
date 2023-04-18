import React from "react";

const StringShortner = (props) => {
  if (!props.string) {
    return null;
  }
  const words = props.string.split(" ");
  let shortString = words.slice(0, props.stringLenth).join(" ");
  if (words.length > props.stringLenth) {
    shortString += "...";
  }
  return <p>{shortString}</p>;
};

export default StringShortner;
