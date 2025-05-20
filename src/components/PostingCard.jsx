import React from "react";
import jacket from "../assets/jacket.png";
import { FiHeart, FiMail } from "react-icons/fi";

const PostingCard = () => {
    return (
        <div className="flex flex-col bg-gray-100 border border-gray-400 rounded-xl p-8 w-full shadow-lg">
            <div className="w-full h-80 overflow-hidden rounded-xl mb-4">
                <img
                    src={jacket}
                    alt="jacket"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-row justify-between w-full">
                <div>
                    <span className="text-black font-semibold">
                        Wilson's Training Jacket
                    </span>
                    <span className="flex flex-col text-black font-bold">
                        Large <br/>
                        $10.50
                    </span>
                </div>
                <svg style={{ height: 0, width: 0 }}>
                    <defs>
                    <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0064A4" />
                        <stop offset="100%" stopColor="#facc15" />
                    </linearGradient>
                    </defs>
                </svg>
                <FiHeart size={24} style={{ stroke: "url(#myGradient)" }}/>

            </div>
        </div>
    )
};

export default PostingCard;