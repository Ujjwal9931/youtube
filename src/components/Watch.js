import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import API_KEY from "../constant/Apidata";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";

const Watch = () => {
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("id");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = () => {
    dispatch(
      setMessage({
        name: "ujjwal",
        message: input,
      })
    );
    setInput("");
  };
  useEffect(() => {
    getSingleVideo();
  }, []);
  return (
    <div className="ml-4 flex justify-between w-[100%] mt-2">
      <div className="flex w-[88%]">
        <div>
          <iframe
            width="900"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="font-bold mt-2 text-lg">
            {singleVideo?.snippet?.title}
          </h1>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center justify-between w-[35%]">
              <div className="flex items-center ">
                <Avatar
                  src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  size={35}
                  round={true}
                />
                <h1 className="font-bold ml-2">
                  {singleVideo?.snippet?.channelTitle}
                </h1>
              </div>
              <button className="px-3 py-1 font-medium bg-black text-white rounded-full">
                Subscribe
              </button>
            </div>
            <div className="flex justify-between w-[40%]">
              <div className="flex items-center  cursor-pointer bg-gray-200 px-4 py-2 rounded-full justify-between">
                <AiOutlineLike size={"20px"} className="mr-5" />
                <AiOutlineDislike size={"20px"} />
              </div>
              <div className="flex items-center  cursor-pointer bg-gray-200 px-4 py-2 rounded-full justify-between">
                <FaShare size={"20px"} className="mr-2" />
                <span>Share</span>
              </div>
              <div className="flex items-center  cursor-pointer bg-gray-200 px-4 py-2 rounded-full justify-between">
                <FaDownload size={"20px"} className="mr-2" />
                <span>Download</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] border border-gray-300 ml-8 rounded-lg h-fit p-4 mr-5">
          <div className="flex justify-between items-center ">
            <h1>Top Chat</h1>
            <BsThreeDotsVertical />
          </div>
          <div className="overflow-y-auto h-[28rem]">
            <LiveChat />
          </div>
          <div className=" flex items-center justify-between border-t p-2">
            <div className="flex items-center w-[90%]">
              <div>
                <Avatar
                  src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  size={30}
                  round={true}
                />
              </div>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border-b border-gray-300 outline-none ml-2"
                type="text"
                placeholder="Send message"
              />
              <div className="bg-gray-200 cursor-pointer p-2 rounded-full">
                <LuSendHorizonal onClick={sendMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
