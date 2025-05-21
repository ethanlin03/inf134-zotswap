import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import InboxCard from "../components/InboxCard";

export default function Inbox() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* Arrow + Title in one line */}
      <div className="flex items-center gap-4 mb-10">
        <button onClick={() => navigate("/")} className="text-4xl pt-[4px]">
          <FaArrowLeft />
        </button>
        <h1 className="text-5xl font-extrabold text-[#0064A4]">Inbox</h1>
      </div>

      {/* Inbox Cards */}
      <div className="space-y-6">
        <InboxCard />
      </div>
    </div>
  );
}
