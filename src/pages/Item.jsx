import { FaArrowLeft } from "react-icons/fa";
import ItemHero from "../components/ItemHero";
import SimilarItems from "../components/SimilarItems";

export default function Item() {
  return (
    <div className="p-12">
      <FaArrowLeft className="text-2xl ml-12" />
      <ItemHero />
      <SimilarItems />
    </div>
  );
}
