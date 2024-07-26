import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useArticles } from "../context/ArticleContext";
import axios from "../axios";
import PopularNews from "../components/PopularNews";

const DetailPage = () => {
  const { newsId } = useParams();
  const { mostPopular, setmostPopular } = useArticles();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get("viewed/7.json");
        setmostPopular(response.data.results);
        const foundArticle = response.data.results.find(
          (item) => item.id === parseInt(newsId)
        );
        setArticle(foundArticle);
        setLoading(false);
      } catch (error) {
        setError("Error fetching article");
        setLoading(false);
      }
    };

    const foundArticle = mostPopular.find(
      (item) => item.id === parseInt(newsId)
    );

    if (foundArticle) {
      setArticle(foundArticle);
      setLoading(false);
    } else {
      fetchArticle();
    }
  }, [newsId, mostPopular, setmostPopular]);

  if (loading) return <div className="p-5 text-center mt-20">Loading...</div>;
  if (error) return <div className="p-5 text-center text-red-600 mt-20">{error}</div>;
  if (!article) return <div className="p-5 text-center mt-20">Article not found <Link className="underline" to="/">Go to Homepage</Link></div>;

  const mediaMetadata =
    article.media && article.media[0] && article.media[0]["media-metadata"];
  const imageUrl = mediaMetadata
    ? mediaMetadata.find((media) => media.format === "mediumThreeByTwo440")?.url
    : "https://dummyimage.com/440x293/bdbdbd/ffffff.png&text=Not+Found";

  return (
    <article className="pt-24">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full overflow-hidden text-center">
            <div className="w-full py-3 mb-5">
              <h2 className="text-gray-800 text-3xl font-bold">
                {article.title}
              </h2>
            </div>

            <div className=" max-w-xl m-auto">
            <figure>
             {imageUrl && ( <img src={imageUrl} alt={article.title} className="w-full h-auto m-auto mb-5" /> )}
            </figure>
              <p className="mb-5">{article.abstract}</p>
              <p className="text-gray-600 text-sm mb-4">
                {article.byline} | Published on: {article.published_date}
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-5"/>
        <PopularNews></PopularNews>
      </div>
    </article>
  );
};

export default DetailPage;
