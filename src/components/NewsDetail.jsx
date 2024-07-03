import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewsDetail = () => {
  const { title } = useParams();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const articles = useSelector((state) => state.newsSlice.news);

  useEffect(() => {
    console.log(articles);
    if (articles.length > 0) {
      const foundArticle = articles.find((a) => a.title === title);
      if (foundArticle) {
        setArticle(foundArticle);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  }, [articles, title]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div>
      <h1 className="card-title mt-4">{article.title}</h1>
      <p className="card-text mt-4 text-left">
        <small className="text-muted">
          By {article.author ? article.author : "Unknown"} on{" "}
          {new Date(article.publishedAt).toLocaleDateString()} | Source: {article.source.name}
        </small>
      </p>
      <img
        src={
          article.urlToImage
            ? article.urlToImage
            : "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        }
        className="card-img-top w-75 img-fluid mt-5 rounded"
        alt="abc"
      />
      <p className="mt-5 text-justify">{article.description}</p>
      <p className="text-justify">{article.content}</p>
      <Link className="btn btn-outline-primary" target="_blank" to={`${article.url}`}>
        Read More &rarr;
      </Link>
    </div>
  );
};

export default NewsDetail;
