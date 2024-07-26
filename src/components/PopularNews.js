import React, { useEffect, useState } from "react";
import NewsBlock from "./NewsBlock";
import axios from "../axios";
import { useArticles } from "../context/ArticleContext";
import { Link } from "react-router-dom";

const PopularNews = () => {
  const { mostPopular, setmostPopular } = useArticles();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (mostPopular.length === 0) {
      setLoading(true);
      axios
        .get("viewed/7.json")
        .then((response) => {
          setmostPopular(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.log("error " + error);
          setError("Error fetching article");
          setLoading(false);
        });
    }
  }, [setmostPopular]);

  if (loading) return <div className="p-5 text-center">Loading...</div>;
  if (error) return <div className="p-5 text-center text-red-600">{error}</div>;

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
              {mostPopular.map((item, index) => {
                const mediaMetadata =
                  item.media &&
                  item.media[0] &&
                  item.media[0]["media-metadata"];
                const imageUrl = mediaMetadata
                  ? mediaMetadata.find(
                      (media) => media.format === "mediumThreeByTwo440"
                    )?.url
                  : "https://dummyimage.com/440x293/bdbdbd/ffffff.png&text=Not+Found";

                return (
                  <Link
                    className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
                    to={`/${item.id}`}
                    key={index}
                  >
                    <NewsBlock
                      title={item.title}
                      section={item.section}
                      abstract={item.abstract}
                      imageUrl={imageUrl}
                      date={item.published_date}
                    ></NewsBlock>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
