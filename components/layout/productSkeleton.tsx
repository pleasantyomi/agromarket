export default function ProductSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="border rounded-lg p-4 h-[300px]">
          <div className="w-full h-40 bg-gray-200 animate-pulse rounded-md mb-4"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2 mb-4"></div>
          <div className="h-8 bg-gray-200 animate-pulse rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
}
