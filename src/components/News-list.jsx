import React, { useState, useEffect } from "react";
import axios from "axios";

import NewsItem from "./News-item";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines?category=general&token=2c4ffcc81723311d1715b29a42b61924');

        console.log(response.data.articles);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getArticles();
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      {articles.map((article, index) => (
        <NewsItem
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.image}
        />
      ))}
    </div>
  );
};

export default NewsList;
