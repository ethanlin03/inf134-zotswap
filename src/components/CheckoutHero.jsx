import { useState } from "react";
import { GoPeople } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Jacket from "../assets/jacket.png";

export default function CheckoutHero() {
  const name = "Wilson's Training Jacket";
  const condition = "Large • Like new condition";
  const price = "$10.50";

  const [method, setMethod] = useState("meetup");

  return (
    <div className="flex flex-col items-center">
      <div className="flex container mx-auto gap-24 justify-center items-center p-8 flex-wrap">
        {/* Left */}
        <div className="flex flex-col gap-4 items-center max-w-lg">
          <img
            src={Jacket}
            alt={name}
            className="rounded-xl max-h-72 border-2"
          />
        </div>

        {/* Right */}
        <div className="self-start py-2">
          <h1 className="text-4xl font-semibold">{name}</h1>
          <h2 className="text-xl font-light">{condition}</h2>
          <h3 className="my-4 text-3xl font-bold">{price}</h3>

          <h3 className="text-2xl text-[#0064A4] font-bold mt-8">
            Select Receive method
          </h3>
          <div className="flex gap-4 h-[40px] mt-4">
            <button
              onClick={() => setMethod("meetup")}
              className={`flex-1 flex items-center justify-center gap-2 px-4 border rounded-md ${
                method === "meetup"
                  ? "bg-[#0064A4] text-white shadow-md"
                  : "border-[#0064A4] text-[#0064A4]"
              }`}
            >
              <GoPeople className="text-xl" />
              Meet up
            </button>
            <button
              onClick={() => setMethod("shipping")}
              className={`flex-1 flex items-center justify-center gap-2 px-4 border rounded-md ${
                method === "shipping"
                  ? "bg-[#0064A4] text-white shadow-md"
                  : "border-[#0064A4] text-[#0064A4]"
              }`}
            >
              <FiTruck className="text-xl" />
              Shipping
            </button>
          </div>
        </div>
      </div>

      {/* Form Area */}
      <div className="w-full max-w-2xl px-6">
        {method === "meetup" && (
          <div className="mt-8">
            <h3 className="flex items-center gap-2 text-[#0064A4] text-xl font-bold mb-2">
              <FaMapMarkerAlt />
              Select Campus Location
            </h3>
            <div className="w-full">
              <input
                type="text"
                placeholder="Search Available locations..."
                className="w-full border rounded-full px-4 py-2 shadow-sm"
              />
            </div>
          </div>
        )}

        {method === "shipping" && (
          <div className="mt-8">
            <h3 className="flex items-center gap-2 text-[#0064A4] text-xl font-bold mb-2">
              <FaMapMarkerAlt />
              Shipping Address
            </h3>
            <input
              type="text"
              placeholder="Search for an Address.."
              className="w-full border rounded-full px-4 py-2 mb-4 shadow-sm"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="City"
                className="flex-1 border rounded-md px-4 py-2 shadow-sm"
              />
              <input
                type="text"
                placeholder="State"
                className="flex-1 border rounded-md px-4 py-2 shadow-sm"
              />
              <input
                type="text"
                placeholder="Zip"
                className="flex-1 border rounded-md px-4 py-2 shadow-sm"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
