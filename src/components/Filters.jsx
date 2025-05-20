import { React, useState } from "react";
import { IoIosTrendingUp } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { LuBookText } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import FilterIcon from "./FilterIcon";

const Filters = () => {
    const [filter, setFilter] = useState("Trending");

    const filters = [
        { label: "Trending", icon: <IoIosTrendingUp/> },
        { label: "Furniture", icon: <AiOutlineHome/> },
        { label: "Textbooks", icon: <LuBookText/> }
    ];

    return (
        <div className="flex flex-row items-center space-x-8 w-fit">
            {filters.map(({ label, icon }) => (
                <FilterIcon
                    icon={icon}
                    label={label}
                    isActive={filter === label}
                    handleClick={() => setFilter(label)}
                />
            ))}
            <BsThreeDots className="text-[#0064A4] cursor-pointer" size={24}/>
        </div>
    )
};

export default Filters;