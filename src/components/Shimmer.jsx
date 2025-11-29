export default function ShimmerCard() {
  return (
   
       <div className=" bg-black border border-white/20 rounded-2xl p-3 
                    shadow-lg animate-pulse">

      {/* Image Placeholder */}
      <div className="h-36 sm:h-40 md:h-48 rounded-xl overflow-hidden bg-white/20 relative">
        <div className="absolute inset-0 shimmer"></div>
      </div>

      {/* Text Lines */}
      <div className="mt-3 space-y-2">
        <div className="h-4 bg-white/20 rounded w-3/4 relative overflow-hidden">
          <div className="absolute inset-0 shimmer"></div>
        </div>
        <div className="h-3 bg-white/20 rounded w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 shimmer"></div>
        </div>
        <div className="h-3 bg-white/20 rounded w-full relative overflow-hidden">
          <div className="absolute inset-0 shimmer"></div>
        </div>
      </div>

      {/* Button Placeholder */}
      <div className="h-10 bg-white/20 rounded-xl mt-4 relative overflow-hidden">
        <div className="absolute inset-0 shimmer"></div>
      </div>
    </div>
  );
}
