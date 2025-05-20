import { FaStar } from "react-icons/fa";
import Jacket from "../assets/jacket.png";
import Profile from "../assets/profile_image.png";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function ItemHero() {
  const name = "Wilson's Training Jacket";
  const condition = "Large • Like new condition";
  const price = "$10.50";
  const profileName = "Petra Anteater";

  return (
    <div className="flex container mx-auto gap-24 justify-center items-center p-8">
      {/* Left */}
      <div className="flex flex-col gap-4 items-center max-w-lg">
        <img src={Jacket} alt={name} className="rounded-xl max-h-100" />
        <div className="flex text-[#0064A4]">
          <MdOutlineArrowBackIos />
          <div className="flex">
            <GoDotFill />
            <GoDotFill className="text-[#0064A4] text-opacity-60" />
            <GoDotFill className="text-[#0064A4] text-opacity-60" />
          </div>
          <MdOutlineArrowForwardIos />
        </div>
      </div>
      {/* Right */}
      <div className="self-start py-2">
        <h1 className="text-4xl font-semibold">{name}</h1>
        <h2 className="text-xl font-light">{condition}</h2>
        <h3 className="my-4 text-3xl font-semibold">{price}</h3>
        <button className="bg-gradient-to-r from-[#0064A4] to-[#DBB504] w-full h-12 rounded-md mb-4">
          Buy Item
        </button>
        <h4 className="mb-2">Posted By</h4>
        <div className="flex items-center gap-4 text-[#0064A4] font-bold mb-4">
          <img src={Profile} alt={profileName} />
          <p>{profileName}</p>
        </div>
        <div className="flex text-[#DBB504] items-center text-2xl">
          <FaStar className="text-2xl" />
          <FaStar className="text-2xl" />
          <FaStar className="text-2xl" />
          <FaStar className="text-2xl" />
          <FaStar className="text-2xl" />
          <p className="ml-1 text-base text-[#0064A4]">(2)</p>
        </div>
      </div>
    </div>
  );
}
