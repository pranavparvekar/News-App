import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Loading from "./loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const { country, category, Pagesize } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const update = async () => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=8ed5e61e357e47899c70c9f34e5e9463&page=1&pageSize=${Pagesize}`;

    setLoading(true);
    try {
      let data = await fetch(apiUrl);
      let parseddata = await data.json();
      console.log(parseddata);

      setArticles(parseddata.articles);
      setTotalResults(parseddata.totalResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    update();
  }, [category, Pagesize]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=8ed5e61e357e47899c70c9f34e5e9463&page=${page}&pageSize=${Pagesize}`;

    setLoading(true);

    try {
      let data = await fetch(apiUrl);
      let parseddata = await data.json();

      setArticles((prevArticles) => [...prevArticles, ...parseddata.articles]);
      setTotalResults(parseddata.totalResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching more data:", error);
      setLoading(false);
    }
  };

  return (
    <div
      className="container my-3"
      style={{ animation: "fadeIn 2s ease-in-out" }}
    >
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading ? <Loading /> : null}
      >
        <div className="row">
          {articles.map((element, index) => (
            <div key={index} className="col-md-3">
              <NewsItems
                title={element.title}
                description={element.description}
                imgurl={element.urlToImage}
                newsurl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  Pagesize: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  Pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
