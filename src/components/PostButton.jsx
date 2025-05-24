import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const PostButton = () => {
  return (
    <Link
      to="/post"
      className="flex flex-row items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-yellow-500 to-[#0064A4] px-6 py-2 hover:scale-95 active:scale-105 cursor-pointer"
    >
      <span className="text-lg font-semibold">
        Post an Item
      </span>
      <FiPlus size={18} />
    </Link>
  );
};

export default PostButton;
