const SearchSkeleton = () => {
  return (
    <div className="space-y-4 w-full">
      {/* Search Result Items */}
      {[...Array(1)].map((_, index) => (
        <div key={index} className="animate-pulse">
          {/* Header with timestamp */}
          <div className="flex justify-between items-center mb-2">
            <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-24"></div>
            <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded w-16"></div>
          </div>

          {/* Main content area */}
          <div className="space-y-3">
            {/* Title */}
            <div className="h-6 bg-gray-200 dark:bg-neutral-700 rounded w-3/4"></div>

            {/* Content lines */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-4/6"></div>
            </div>
          </div>

          {/* Tags or metadata */}
          <div className="flex gap-2 mt-3">
            <div className="h-6 bg-gray-200 dark:bg-neutral-700 rounded-full w-16"></div>
            <div className="h-6 bg-gray-200 dark:bg-neutral-700 rounded-full w-20"></div>
          </div>
        </div>
      ))}

      {/* Searching indicator */}
      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
        <span>Searching through your memories...</span>
      </div>
    </div>
  );
};

export default SearchSkeleton;
