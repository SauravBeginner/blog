export const FullBlogSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 px-8">
      <div className="animate-pulse">
        <h1 className="text-5xl font-bold leading-tight mb-4 h-12 bg-gray-300 rounded-full"></h1>
        <p className="text-lg text-gray-600 mb-8 h-6 bg-gray-300 rounded-full"></p>
        <div className="flex">
          <div className="flex-grow">
            <p className="text-lg leading-relaxed mb-6 h-8 bg-gray-300 rounded-full"></p>
            <h2 className="text-2xl font-semibold mb-4 h-10 bg-gray-300 rounded-full"></h2>
          </div>
          <div className="w-48 ml-12">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold h-8 bg-gray-300 rounded-full"></h3>
                <p className="text-sm text-gray-600 h-6 bg-gray-300 rounded-full"></p>
              </div>
            </div>
            <p className="text-sm h-32 bg-gray-300 rounded-full"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
