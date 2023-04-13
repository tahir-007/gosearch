"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const GetLocation = () => {
  const [location, SetLocation] = useState("");
  //get location details
  useEffect(() => {
    // fetch("https://ipapi.co/json")
    //   .then((res) => res.json())
    //   .then((data) => SetLocation(data));
    axios.get("https://ipapi.co/json").then((response) => {
      SetLocation(response.data);
    });
  }, []);
  return <div>{location.country_name}</div>;
};

export default GetLocation;
