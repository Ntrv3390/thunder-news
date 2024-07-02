import React, { useEffect, useState } from "react";
import Newsitem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    updateNews();
  }, []);

  const handlePrevNews = async () => {
    let prevPage = page - 1;
    setPage(prevPage);
    updateNews();
  };
  const handleNextNews = async () => {
    let nextPage = page + 1;
    setPage(nextPage);
    updateNews();
  };
  const containerStyle = {
    margin: "60px",
  };
  return (
    <>
      <div className="container mt-5 mb-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <h2 className="text-center mb-5" style={containerStyle}>
          {props.title}{" "}
        </h2>
        {loading && <Loading />}
        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div
                  className="col-md-3 mt-4 col-sm-6 col-lg-3"
                  key={element.url}
                >
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="container d-flex justify-content-around">
        <button
          disabled={page <= 1}
          onClick={handlePrevNews}
          type="button"
          className="btn btn-primary"
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          type="button"
          onClick={handleNextNews}
          className="btn btn-primary"
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "science",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
