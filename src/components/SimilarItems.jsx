import PostingCard from "./PostingCard";

export default function SimilarItems() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 max-w-6xl mx-auto">
        <h1 className="text-[#0064A4] font-bold text-4xl">Similar items</h1>
        <div className="flex gap-12">
          <PostingCard />
          <PostingCard />
          <PostingCard />
        </div>
      </div>
    </div>
  );
}
