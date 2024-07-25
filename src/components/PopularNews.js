import React, { useEffect, useState } from "react";
import NewsBlock from "./NewsBlock";
import axios from "../axios";

const PopularNews = () => {
  const [mostPopular, setmostPopular] = useState([]);

  useEffect(() => {
    axios
      .get("viewed/7.json")
      .then((response) => {
        console.log(response.data.results[0]);
        setmostPopular(response.data.results)
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);

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
            {
                mostPopular.map((item, index) => {

                  const mediaMetadata = item.media && item.media[0] && item.media[0]['media-metadata'];
                  const imageUrl = mediaMetadata ? mediaMetadata.find(media => media.format === 'mediumThreeByTwo440')?.url : 'https://dummyimage.com/440x293/bdbdbd/ffffff.png&text=Not+Found';

                  console.log(imageUrl)

                  return(<NewsBlock key={index} title={item.title} section={item.section} abstract={item.abstract} imageUrl={imageUrl} date={item.published_date} ></NewsBlock>)
                  
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
