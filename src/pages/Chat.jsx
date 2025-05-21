import jacket from "../assets/jacket.png";
import { FaArrowLeft } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Profile from "../assets/profile_image.png";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen">
      <svg style={{ height: 0, width: 0 }}>
        <defs>
          <linearGradient id="sendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0064A4" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <FaArrowLeft
            onClick={() => navigate("/inbox")}
            className="cursor-pointer text-2xl"
          />
          <div className="flex items-center gap-2">
            <img src={Profile} alt="Profile" className="h-8 w-8 rounded-full" />
            <span className="font-bold text-[#0064A4]">Petra Anteater</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex justify-end mb-2">
          <div className="border rounded-lg p-4 w-fit max-w-md shadow-sm">
            <div className="flex items-center gap-4">
              <img
                src={jacket}
                alt="item"
                className="h-20 w-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="font-semibold">Wilson’s Training Jacket</div>
                <div className="text-sm text-gray-500">
                  Large • Like new condition
                </div>
                <div className="font-bold mt-1">$10.50</div>
              </div>
              <div className="text-[#0064A4] font-bold text-sm whitespace-nowrap">
                Meet up
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end text-sm text-gray-500 pr-2">
          order sent
        </div>
      </div>
      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-full px-4 py-2 outline-none"
          />
          <IoSend
            className="text-2xl cursor-pointer"
            style={{ fill: "url(#sendGradient)", stroke: "url(#sendGradient)" }}
          />
        </div>
      </div>
    </div>
  );
}
