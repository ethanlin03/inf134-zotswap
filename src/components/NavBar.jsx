import PostButton from "./PostButton";
import ProfileIcon from "./ProfileIcon";

const NavBar = () => {
    return (
        <div className="flex flex-row w-screen shadow-lg justify-between px-10 py-10">
            <PostButton/>
            <ProfileIcon/>
        </div>
    );
};

export default NavBar;