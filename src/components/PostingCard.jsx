import React, { useState } from "react";
import jacket from "../assets/jacket.png";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PostingCard = ({ isLiked = false }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(isLiked);

  return (
    <div
      onClick={() => navigate("/item/id")}
      className="flex flex-col bg-gray-100 border border-gray-400 rounded-xl p-8 w-full shadow-lg hover:cursor-pointer"
    >
      <div className="w-full h-80 overflow-hidden rounded-xl mb-4">
        <img
          src={jacket}
          alt="jacket"
          className="w-full h-full object-contain select-none"
        />
      </div>

      <div className="flex flex-row justify-between w-full items-start">
        <div>
          <span className="text-black font-semibold">
            Wilson's Training Jacket
          </span>
          <span className="flex flex-col text-black font-bold">
            Large <br />
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
        <div
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="cursor-pointer"
        >
          {liked ? (
            <FaHeart
              size={24}
              style={{ fill: "url(#myGradient)", stroke: "url(#myGradient)" }}
            />
          ) : (
            <FiHeart size={24} style={{ stroke: "url(#myGradient)" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostingCard;
