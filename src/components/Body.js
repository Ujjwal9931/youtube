import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { MdDownloadForOffline } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoSave } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdContentCut } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdMusicalNote } from "react-icons/io";
import { IoFilm } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { CgFlag } from "react-icons/cg";

const Body = () => {
    const sidebarHdata = [
        {
          id: 1,
          icon: <MdOutlineHome size={"24px"} />,
          title: "Home",
        },
        {
          id: 2,
          icon: <SiYoutubeshorts size={"24px"} />,
          title: "Short",
        },
        {
          id: 3,
          icon: <MdOutlineSubscriptions size={"24px"} />,
          title: "Subscription",
        },
        {
          id: 4,
          icon: <TfiVideoClapper size={"22px"} />,
          title: "You",
        },
        {
          id: 5,
          icon: <MdDownloadForOffline size={"24px"} />,
          title: "Download",
        },
        {
          id: 6,
          icon: <FaHistory size={"24px"} />,
          title: "History",
        },
        {
          id: 7,
          icon: <IoSave size={"24px"} />,
          title: "Your Video",
        },
        {
          id: 8,
          icon: <MdOutlineWatchLater size={"24px"} />,
          title: "Watch Later",
        },
        {
          id: 9,
          icon: <MdContentCut size={"24px"} />,
          title: "Your Clips",
        },
        {
          id: 10,
          icon: <AiOutlineLike size={"24px"} />,
          title: "Liked ",
        },
        {
          id: 11,
          icon: <IoMdMusicalNote size={"24px"} />,
          title: "Music",
        },
        {
          id: 12,
          icon: <IoFilm size={"24px"} />,
          title: "Films",
        },
        {
          id: 13,
          icon: <SiYoutubegaming size={"24px"} />,
          title: "Gaming",
        },
        {
          id: 14,
          icon: <MdPodcasts size={"24px"} />,
          title: "Podcasts",
        },
        {
          id: 15,
          icon: <FaNewspaper size={"24px"} />,
          title: "Live News",
        },
        {
          id: 16,
          icon: <IoSettingsSharp size={"24px"} />,
          title: "Setting",
        },
        {
          id: 17,
          icon: <CgFlag size={"24px"} />,
          title: "Report ",
        },
      
      ];
  return (
   
      <div className="flex mt-16 ">
        <Sidebar sidebarHdata={sidebarHdata} />
        <Outlet />
      </div>
   
  )
}

export default Body
