import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className="flex items-center border border-gray-400 rounded-2xl px-5 py-3 shadow-sm w-full max-w-3xl">
            <input
                type="text"
                placeholder="Search for an item..."
                className="outline-none w-full bg-transparent text-gray-700 placeholder-gray-400"
            />
            <IoSearch className="text-[#0064A4] text-xl" />
        </div>
    );
};

export default SearchBar;