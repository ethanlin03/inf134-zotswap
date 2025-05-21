import { useNavigate } from "react-router-dom";

export default function InboxCard() {
  const navigate = useNavigate();
  const name = "Petra Anteater";
  return (
    <div
      onClick={() => navigate("/inbox/1")}
      className="p-6 rounded-2xl shadow-md cursor-pointer border-2 transition-all hover:shadow-lg bg-white"
    >
      <div className="text-2xl font-bold text-[#0064A4] mb-2">{name}</div>
      <div className="text-lg text-gray-700">
        Your order for{" "}
        <span className="text-[#0064A4] text-bold">
          Wilson’s Training Jacket
        </span>{" "}
        was sent
      </div>
    </div>
  );
}
