import Profile from "../assets/profile_image.png";
import { useLocation, useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { IoMailOutline, IoMailSharp } from "react-icons/io5";
import GradientIcon from "./GradientIcon";

const ProfileIcon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isOnLikedPage = location.pathname === "/likes";
  const isOnInboxPage = location.pathname === "/inbox";

  return (
    <div className="flex flex-row items-center ml-auto w-fit">
      <button
        onClick={() => navigate("/likes")}
        className="mr-8 cursor-pointer hover:scale-90 active:scale-110"
      >
        <GradientIcon
          icon={isOnLikedPage ? <FaHeart /> : <FiHeart />}
          filled={isOnLikedPage}
        />
      </button>

      <button
        onClick={() => navigate("/inbox")}
        className="mr-8 cursor-pointer hover:scale-90 active:scale-110"
      >
        <GradientIcon
          icon={isOnInboxPage ? <IoMailSharp /> : <IoMailOutline />}
          filled={isOnInboxPage}
        />
      </button>

      <div className="flex flex-row items-center">
        <img src={Profile} alt="Profile icon" className="mr-4" />
        <div className="flex flex-col justify-center items-start">
          <span className="font-bold text-md text-[#0064A4]">Peter the Anteater</span>
          <span className="text-sm text-[#0064A4] underline cursor-pointer">
            View profile
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;
