import ShimmerCard from "./Shimmer";

export default function ShimmerGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(count)].map((_, i) => (
        <ShimmerCard key={i} />
      ))}
    </div>
  );
}
