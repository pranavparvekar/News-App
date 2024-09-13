import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Loading from "./loading";
import "./Hinews.css";

function Hinews({ category }) {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=8ed5e61e357e47899c70c9f34e5e9463`
      );
      const data = await response.json();
      setArticles(data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=8ed5e61e357e47899c70c9f34e5e9463`
        );
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="hinews-container">
      <h1 className="hinews-title">Search News</h1>
      <button className="hinews-button" onClick={toggleSearch}>
        Search
      </button>
      {showSearch && (
        <form className="hinews-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search News"
            className="hinews-input"
          />
          <button type="submit" className="hinews-submit">
            Search
          </button>
        </form>
      )}
      {loading ? (
        <Loading />
      ) : (
        <div className="hinews-articles">
          {articles && articles.length > 0 ? (
            articles.map((element, index) => (
              <div key={index} className="hinews-article">
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))
          ) : (
            <div>No articles found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Hinews;
