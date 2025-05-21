import { FaArrowLeft } from "react-icons/fa";
import CheckoutHero from "../components/CheckoutHero";
import OrderSummary from "../components/OrderSummary";

export default function Checkout() {
  return (
    <div className="p-12">
      <FaArrowLeft className="text-2xl ml-12" />
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
