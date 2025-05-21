import { FaArrowLeft } from "react-icons/fa";
import CheckoutHero from "../components/CheckoutHero";
import OrderSummary from "../components/OrderSummary";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="p-12">
      <FaArrowLeft
        onClick={() => navigate("/item/id")}
        className="text-2xl ml-12 hover:cursor-pointer"
      />
      <div className="flex flex-wrap justify-center gap-8 divide-x-2">
        <div className="flex-1 min-w-[300px] max-w-4xl">
          <CheckoutHero />
        </div>
        <div className="w-full max-w-xs pl-16">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
