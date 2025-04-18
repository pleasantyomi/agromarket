export default function Skeleton() {
  return (
    <div>
      <div className="border rounded-lg p-4 h-[300px] w-11/12 mx-auto">
        <div className="w-full h-40 bg-gray-200 animate-pulse rounded-md mb-4"></div>
        <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2 mb-4"></div>
        <div className="h-8 bg-gray-200 animate-pulse rounded w-1/4"></div>
      </div>
    </div>
  );
}
