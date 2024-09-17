import React, { useState } from "react";
import { Link } from "react-router-dom";

const home = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleSelectChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // temp add to storage
  const handleClick = () => {
    console.log(selectedCity);
    localStorage.setItem("city", selectedCity);
  };

  return (
    <div
      className="hero min-h-full"
      style={{
        backgroundImage: "url(/drinks-with-friends-1920x1080.png)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="w-full">
          <h1 className="mb-5 text-5xl font-extrabold">Scouting Beer Deals?</h1>
          <h5 className="mb-5 text-xl font-light">
            Find the cheapest beer near you!
          </h5>
          <div className="flex flex-col justify-center sm:flex-row">
            <select
              className="select select-bordered w-full max-w-xs bg-base-100 text-base-content"
              onChange={handleSelectChange}
            >
              <option disabled selected>
                Select your city
              </option>
              <option>St.Johns</option>
              <option>Halifax</option>
            </select>
            <Link
              to="/bar-list"
              className="btn btn-primary btn-wide sm:ml-4"
              onClick={handleClick}
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
