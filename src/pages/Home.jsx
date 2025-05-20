import React from "react";
import ZotSwap from "../assets/zotswap.png";
import ProfileSection from "../components/ProfileIcon";
import PostButton from "../components/PostButton";
import SearchBar from "../components/SearchBar";
import PostingCard from "../components/PostingCard";
import Filters from "../components/Filters";

const Home = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen">
            <div className="flex justify-between items-center w-full mb-20 px-10 py-6">
                <PostButton />
                <ProfileSection />
            </div>

            <div className="flex flex-col items-center space-y-6 mb-32">
                <img src={ZotSwap} alt="ZotSwap logo" className="w-1/12" />
                <SearchBar />
                <Filters />
            </div>
            <div className="w-full px-6">
                <div className="grid grid-cols-3 gap-x-28 gap-y-20 max-w-[70%] mx-auto">
                    <PostingCard />
                    <PostingCard />
                    <PostingCard />
                    <PostingCard />
                    <PostingCard />
                    <PostingCard />
                    <PostingCard />
                    <PostingCard />
                </div>
            </div>
        </div>
    );
};

export default Home;
