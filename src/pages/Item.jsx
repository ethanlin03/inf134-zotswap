import { FaArrowLeft } from "react-icons/fa";
import ItemHero from "../components/ItemHero";
import SimilarItems from "../components/SimilarItems";
import { useNavigate } from "react-router-dom";

export default function Item() {
  const navigate = useNavigate();
  return (
    <div className="p-12">
      <FaArrowLeft
        onClick={() => {
          navigate("/");
        }}
        className="text-2xl ml-12 hover:cursor-pointer"
      />
      <ItemHero />
      <SimilarItems />
    </div>
  );
}
