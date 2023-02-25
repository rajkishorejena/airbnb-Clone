import React, { useState } from "react";
import Airbnb from "../Assets/Images/airbnb-logo.png";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 5,
  color: "#FE595E",
  className: "z-51",
  delay: 100,
});

const Header = ({ placeholder }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const searchBtnHandler = () => {
    navigate("/search", {
      state: {
        location: searchInput,
        startDate: startDate,
        endDate: endDate,
        noOfGuest: noOfGuest,
      },
    });
    setSearchInput("");
    progress.start();
    setTimeout(() => {
      progress.finish();
    }, 2000);
  };

  return (
    <header className="static top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-2 md:px-10">
      {/* Left */}
      <div className="relative items-center flex w-24 cursor-pointer my-auto">
        <img
          src={Airbnb}
          alt="Airbnb"
          className="object-contain object-left fill-inherit"
          onClick={() => navigate("/")}
        />
      </div>
      {/* Center */}
      <div className="flex items-center md:border-2 rounded-full p-2  gap-5 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none  text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex   h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-400 ">
        <p className="cursor-pointer hidden md:inline ">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 items-center border-2 rounded-full p-2 cursor-pointer">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guests
            </h2>
            <UserGroupIcon className="h-5" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button
              className="flex-grow text-red-400"
              onClick={searchBtnHandler}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
