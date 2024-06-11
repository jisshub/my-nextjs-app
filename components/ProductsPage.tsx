"use client";

import React, { useState } from "react";
import { users } from "../data/user";

const ProductsPage = () => {
  const [serviceType, setServiceType] = useState("");
  const [status, setStatus] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const serviceTypes = Array.from(new Set(users.map(user => user.type)));
  const statuses = Array.from(new Set(users.map(user => user.status)));

  const resetToDefault = () => {
    setServiceType("");
    setStatus("");
    setFilteredUsers(users);
  };

  const handleApply = () => {
    const filtered = users.filter(user => 
      (serviceType ? user.type === serviceType : true) &&
      (status ? user.status === status : true)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="flex flex-col p-4 space-y-4 w-full">
      <div className="flex flex-col space-y-4">
        <label className="block text-gray-700">Select service type</label>
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All</option>
          {serviceTypes.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <label className="block text-gray-700">Select status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All</option>
          {statuses.map(status => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={resetToDefault}
          className="bg-gray-300 text-black font-bold hover:bg-gray-400 px-4 py-2 rounded-md normal-case"
        >
          Reset to Default
        </button>
        <button
          onClick={handleApply}
          className="bg-black text-white font-bold hover:bg-gray-800 px-4 py-2 rounded-md normal-case"
        >
          Apply
        </button>
      </div>
      <div className="mt-4">
        {filteredUsers.length > 0 ? (
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
        ) : (
          <h6 className="text-lg font-semibold mb-4">
            No matching users found.
          </h6>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
