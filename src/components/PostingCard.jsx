import React, { useState } from "react";
import jacket from "../assets/jacket.png";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import GradientIcon from "./GradientIcon";

const PostingCard = ({ isLiked = false }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(isLiked);

  return (
      <div
        onClick={() => navigate("/item/id")}
        className="flex flex-col bg-gray-100 border border-gray-400 rounded-xl p-8 w-full shadow-lg cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-[#0064A4] active:ring-4 active:ring-yellow-400"
      >
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
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked(!liked);
                }}
                className="cursor-pointer hover:scale-90 active:scale-110"
              >
                <GradientIcon
                    icon={liked ? <FaHeart /> : <FiHeart />}
                    filled={liked}
                />
              </div>
          </div>
     </div>
    );
};

export default PostingCard;
