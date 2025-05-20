import React from "react";
import { IoIosTrendingUp } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { LuBookText } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";

const Filters = () => {
    return (
        <div className="flex flex-row items-center space-x-8">
            <div className="flex flex-row space-x-4 bg-[#0064A4] px-4 py-2 rounded-md shadow-md">
                <IoIosTrendingUp className="text-[#FFD200]" size={24} style={{ strokeWidth: 10 }}/>
                <span className="text-white font-semibold">
                    Trending
                </span>
            </div>
            <div className="flex flex-row space-x-4 bg-white border-2 border-[#0064A4] px-4 py-2 rounded-md shadow-md">
                <AiOutlineHome className="text-[#0064A4]" size={24}/>
                <span className="text-[#0064A4] font-semibold">
                    Furniture
                </span>
            </div>
            <div className="flex flex-row space-x-4 bg-white border-2 border-[#0064A4] px-4 py-2 rounded-md shadow-md">
                <LuBookText className="text-[#0064A4]" size={24}/>
                <span className="text-[#0064A4] font-semibold">
                    Textbooks
                </span>
            </div>
            <BsThreeDots className="text-[#0064A4]" size={24}/>
        </div>
    )
};

export default Filters;