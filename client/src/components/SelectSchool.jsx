import React, { useState } from "react";
import {  FaPlus } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

const SelectSchool = () => {
  const [selectedSchool, setSelectedSchool] = useState("");

  const handleSchoolChange = (event) => {
    setSelectedSchool(event.target.value);
  };

  return (
    <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col p-2">
        <h3 className="text-gray-600">Select School</h3>
      <select 
        name="school"
        id="school-select"
        className="  py-2 px-14 bg-gray-100 text-start mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
        value={selectedSchool}
        onChange={handleSchoolChange}
      >
        <option value="">Big Ben</option>
        <option value="school1">School 1</option>
        <option value="school2">School 2</option>
        <option value="school3">School 3</option>
      </select>
        </div>
        
      <div className="flex items-center">
        <button className="mr-5  ">
          <FiFilter className="w-9 h-9 text-purple-700  border border-opacity-85 rounded-full p-2" />
        </button>
        <button className="flex items-center py-2 px-4 rounded-2xl bg-purple-600 text-white">
          <FaPlus className="w-4 h-4 mr-1" />
          Add a student
        </button>
      </div>
    </div>
  );
};

export default SelectSchool;
