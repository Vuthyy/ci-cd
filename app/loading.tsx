import React from "react";

const Loading = () => {
  return (
    <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10 mx-8">
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse"
          >
            <div className="p-2 h-64 bg-gray-300 rounded-t-lg dark:bg-gray-700"></div>
            <div className="px-5 pb-5">
              <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 mb-4 mt-2"></div>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"
                      ></div>
                    ))}
                  <div className="w-4 h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
                <div className="h-4 bg-blue-100 rounded dark:bg-blue-200 ms-3 w-10"></div>
              </div>
              <div className="flex items-center justify-between gap-x-6">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
                <div className="h-6 bg-blue-700 dark:bg-blue-600 rounded w-24"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Loading;
