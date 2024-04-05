export const BlogCardSkeleton = () => {
  return (
    <div
      role="status"
      className="animate-pulse space-y-4 flex border-b-2 shadow-md mb-5"
    >
      <div className="flex-1 p-4">
        <header className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          <div>
            <div className="h-4 bg-gray-200 rounded-full w-20"></div>
            <div className="h-4 bg-gray-200 rounded-full w-24 mt-1"></div>
          </div>
        </header>
        <div className="h-8 bg-gray-200 rounded-full w-2/3 mt-2"></div>
        <div className="h-2 bg-gray-200 rounded-full w-4/5 mt-2"></div>
        <div className="h-2 bg-gray-200 rounded-full w-3/4 mt-2"></div>
        <div className="h-2 bg-gray-200 rounded-full w-5/6 mt-2"></div>
        <div className="h-2 bg-gray-200 rounded-full w-2/3 mt-2"></div>
        <div className="h-2 bg-gray-200 rounded-full w-4/5 mt-2"></div>
        <footer className="flex items-center justify-between pt-2">
          <div className="h-4 bg-gray-200 rounded-full w-20"></div>
          <div className="h-4 bg-gray-200 rounded-full w-12"></div>
          <div className="h-4 bg-gray-200 rounded-full w-8"></div>
        </footer>
      </div>
      <div className="flex-shrink-0 mx-4">
        <div className="h-32 w-32 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};
