import React, { useEffect, useState } from "react";
import Newsitem from "./NewsItem";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsByCategory } from "../features/newsSlice";

const News = (props) => {
  const [page, setPage] = useState(1);
  const { country, category, pageSize } = props;
  const apiKey = import.meta.env.VITE_APP_NEWS_API_KEY;
  const dispatch = useDispatch();
  const { loading, news, error, errorMessage, length } = useSelector(
    (state) => state.newsSlice
  );
  useEffect(() => {
    dispatch(
      fetchNewsByCategory({ country, category, apiKey, page, pageSize })
    );
    window.scrollTo(0, 0);
  }, [dispatch, country, category, apiKey, page, pageSize]);

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
        <h2 className="text-center mb-5" style={containerStyle}>
          {props.title}{" "}
        </h2>
        {loading && <Loading />}
        {error && errorMessage && <div>{errorMessage}</div>}
        <div className="row">
          {!loading &&
            news &&
            news.map((element) => {
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
          disabled={loading || page + 1 > Math.ceil(length / pageSize)}
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

export default News;
