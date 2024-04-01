
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { setCategory, toggleSidebar } from "../utils/appSlice";
import { useState } from "react";


function Navbar() {
  const [input , setInput] = useState("")
  const dispatch = useDispatch()
  const toggleHandler = () =>{
       dispatch(toggleSidebar());
  };
  const searchVideoByInput = () =>{
    dispatch(setCategory(input))
    setInput("");
  }
  return (
    <div className="flex fixed top-0 justify-center w-[100%] z-10 bg-white">
      <div className="flex w-[100%] justify-between px-5 my-2">
        <div className="flex items-center ">
          <GiHamburgerMenu onClick={toggleHandler} size="24px" className="cursor-pointer"/>
          <img
            width={"115px"} className="px-4 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
            alt="Youtube"
          />
        </div>
        <div className="flex items-center w-[40%] ">
          <div className="w-[100%] py-2 px-4 border border-gray-400  rounded-l-full">
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search.."
              className=" w-full outline-none"
            />
          </div>
          <button onClick={searchVideoByInput} className="py-2 border bg-gray-300 border-gray-400 rounded-r-full px-4 "><CiSearch size={"24px"} /></button>
        </div>
        <div className="flex w-[10%] justify-between items-center ">
          <IoIosNotificationsOutline size={"24px"} className="cursor-pointer" />
          <CiVideoOn className="cursor-pointer"/>
          <Avatar
            src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            size={30}
            round={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
