import React from "react";
import ZotSwap from "../assets/zotswap.png";
import ProfileSection from "../components/ProfileIcon";
import PostButton from "../components/PostButton";
import SearchBar from "../components/SearchBar";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex justify-between items-center w-full mb-20 px-10 py-6">
                <PostButton />
                <ProfileSection />
            </div>

            <div className="flex flex-col items-center space-y-6">
                <img src={ZotSwap} alt="ZotSwap logo" className="w-1/12" />
                <SearchBar />
            </div>
        </div>
    );
};

export default Home;
