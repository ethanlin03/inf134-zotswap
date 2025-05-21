import { FaArrowLeft, FaHeart } from "react-icons/fa";
import PostingCard from "../components/PostingCard";
import { useNavigate } from "react-router-dom";

export default function Likes() {
  const navigate = useNavigate();
  return (
    <div className="p-12">
      <div className="flex items-center gap-4 mb-8">
        <FaArrowLeft
          onClick={() => navigate("/")}
          className="text-2xl hover:cursor-pointer"
        />
        <svg style={{ height: 0, width: 0 }}>
          <defs>
            <linearGradient
              id="heartGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0064A4" />
              <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
          </defs>
        </svg>
        <FaHeart
          className="text-4xl"
          style={{
            fill: "url(#heartGradient)",
            stroke: "url(#heartGradient)",
          }}
        />
        <h1 className="text-[#0064A4] font-bold text-4xl">Liked Items</h1>
      </div>
      <div className="self-start">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <PostingCard isLiked={true} />
          <PostingCard isLiked={true} />
          <PostingCard isLiked={true} />
          <PostingCard isLiked={true} />
        </div>
      </div>
    </div>
  );
}
