import React from "react";
import Profile from "../assets/profile_image.png";
import { FiHeart, FiMail } from "react-icons/fi";


const ProfileIcon = () => {
    return (
        <div className="flex flex-row items-center ml-auto w-fit">
            <FiHeart className="text-yellow-500 mr-8" size={24}/>
            <FiMail className="text-yellow-500 mr-8" size={24}/>
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