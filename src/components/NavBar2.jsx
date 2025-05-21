import ProfileIcon from "./ProfileIcon";
import Logo from "../assets/zotswap.png";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-w-screen shadow-lg justify-between items-center p-4 gap-2">
      <img
        onClick={() => navigate("/")}
        src={Logo}
        alt="Zot Swap"
        className="h-full w-full max-w-48 hover:cursor-pointer"
      />
      <SearchBar />

      <div>
        <ProfileIcon />
      </div>
    </div>
  );
};

export default NavBar;
