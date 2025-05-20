import React from "react";
import Profile from "../assets/profile_image.png";
import { FiHeart, FiMail } from "react-icons/fi";


const ProfileIcon = () => {
    return (
        <div className="flex flex-row items-center ml-auto w-fit">
            <svg style={{ height: 0, width: 0 }}>
                <defs>
                <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0064A4" />
                    <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
                </defs>
            </svg>
            <FiHeart size={24} style={{ stroke: "url(#myGradient)" }} className="mr-8"/>
            <FiMail size={24} style={{ stroke: "url(#myGradient)" }} className="mr-8"/>
            <div className="flex flex-row items-center">
                <img src={Profile} alt="Profile icon" className="mr-4"/>
                <div className="flex flex-col justify-center items-start">
                    <span className="font-bold text-md text-[#0064A4]">
                        Peter the Anteater
                    </span>
                    <span className="text-sm text-[#0064A4] underline">
                        View profile
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProfileIcon;