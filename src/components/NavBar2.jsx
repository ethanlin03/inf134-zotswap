import ProfileIcon from "./ProfileIcon";
import Logo from "../assets/zotswap.png";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="flex min-w-screen shadow-lg justify-between items-center p-4 gap-2">
      <img src={Logo} alt="Zot Swap" className="h-full w-full max-w-48" />
      <SearchBar />

      <div>
        <ProfileIcon />
      </div>
    </div>
  );
};

export default NavBar;
