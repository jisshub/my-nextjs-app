"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { users } from "../data/user";

const PeoplePage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchOption, setSearchOption] = useState("name");

  const resetToDefault = () => {
    setSearchText("");
    setSearchOption("name");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchOption(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    searchOption === "name"
      ? user.name.toLowerCase().includes(searchText.toLowerCase())
      : user.tag.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex flex-col p-4 space-y-4 w-full">
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="name"
            checked={searchOption === "name"}
            onChange={handleSearchOptionChange}
            className="form-radio"
          />
          <span>Search by name</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="tag"
            checked={searchOption === "tag"}
            onChange={handleSearchOptionChange}
            className="form-radio"
          />
          <span>Search by tags</span>
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder={`Search ${searchOption === "name" ? "service name" : "tags"}`}
          value={searchText}
          onChange={handleSearchChange}
          className="w-full border border-gray-300 rounded-md p-2 pl-10"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <CiSearch size={"30"} />
        </div>
        {searchText && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <button onClick={() => setSearchText("")}>
              <IoIosCloseCircleOutline size={"30"} />
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={resetToDefault}
          className="bg-gray-300 text-black font-bold hover:bg-gray-400 px-4 py-2 rounded-md normal-case"
        >
          Reset to Default
        </button>
      </div>
      <div className="mt-4">
        {searchText && (
          <h6 className="text-lg font-semibold mb-4">
            Showing {filteredUsers.length} results matching '{searchText}'
          </h6>
        )}
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span className="flex-1">{user.name}</span>
              <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 mr-2">{user.type}</span>
              <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1">{user.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PeoplePage;