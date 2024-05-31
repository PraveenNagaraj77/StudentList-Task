import React from 'react'
import { MdOutlineLogout } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaChartBar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineNavigateNext} from "react-icons/md";

const Icons = () => {
  return (
    <div className='flex flex-col justify-center gap-24 px-2'>
      <div className='text-white' > <LiaTelegramPlane size={60}/> </div>
      <div className='flex flex-col justify-between text-gray-400 gap-10 cursor-pointer' >
        <div className='flex flex-row justify-start '>
        <MdOutlineNavigateNext size={25} className='text-white'/>
        <RiUserAddLine size={30} className='text-white mr-4'/>
        </div>
        
        <HiOutlineAcademicCap size={30}/>
        <FaChartBar size={30}/>
        <FaRegCalendarAlt size={30}/>
        <IoSettingsOutline size={30}/>
      </div>
      <div className='text-gray-400 cursor-pointer'>
        <MdOutlineLogout size={30} fontSize={12}/>
      </div>
    </div>
  )
}

export default Icons
