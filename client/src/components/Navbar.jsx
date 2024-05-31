import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineListAlt } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { FaUser } from 'react-icons/fa';
import { PiCaretDownLight } from "react-icons/pi";
import PropTypes from 'prop-types';

const Navbar = ({ totalStudents }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 text-black">
    {/* Logo and Number */}
    <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">Students</div>
        <div className="flex items-center justify-center w-8 h-8 bg-gray-100 px-5 border border-black text-purple-700 font-semibold rounded-xl">
            {totalStudents}
        </div>
    </div>

    {/* Search Box */}
    <div className="flex flex-grow mx-10  ml-52">
    <div className="flex items-center  relative  ml-0  w-full p-1">
    <input
        type="text"
        className="w-fit py-2 pl-10 pr-4 border-b border-black bg-gray-100 text-gray-900 focus:outline-none"
        placeholder="Search"
    />
    <BiSearchAlt className="absolute left-3 top-2.5 text-purple-700 size-[28px]"  />
</div>
    </div>

    {/* Icons */}
    <div className="flex items-center space-x-6">
        <AiOutlineBell className="text-xl cursor-pointer text-purple-700 size-[28px]" />
        <MdOutlineListAlt className="text-xl cursor-pointer text-purple-700 size-[28px]" />
        <div className="flex items-center space-x-2 cursor-pointer">
            <FaUser className="text-xl size-[28px]" />
            <PiCaretDownLight className="text-xl text-purple-700 w-28px h-28px" />
        </div>
    </div>
</div>
  );
};

Navbar.propTypes = {
    totalStudents: PropTypes.number.isRequired
  };

export default Navbar;
