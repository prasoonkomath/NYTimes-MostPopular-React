import React from "react";
import NewsBlock from "./NewsBlock";

const PopularNews = () => {
  return (
    <div className="bg-white py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full overflow-hidden">
            <div className="w-full py-5">
              <h2 className="text-gray-800 text-2xl font-bold">
                <span className="inline-block h-5 mr-2 w-1 bg-red-500"></span>
                Most Popular
              </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
            <NewsBlock></NewsBlock>
            <NewsBlock></NewsBlock>
            <NewsBlock></NewsBlock>
            <NewsBlock></NewsBlock>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
