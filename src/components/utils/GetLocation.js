"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const GetLocation = () => {
  const [location, SetLocation] = useState("");
  //get location details
  useEffect(() => {
    axios
      .get("https://ipapi.co/json")
      .then((response) => {
        SetLocation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {location.city}, {location.country_name}
    </div>
  );
};

export default GetLocation;
