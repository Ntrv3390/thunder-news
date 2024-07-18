import React from "react";
import { Link } from "react-router-dom";

const Newsitem = (props) => {
  let { title, description, imageUrl, author, publishedAt, source } = props;
  return (
    <>
      <div className="card">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          }
          height:{100}
          width: {100}
          className="card-img-top"
          alt="abc"
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 45) : ""}...</h5>
          <p className="card-text">
            {description ? description.slice(0, 90) : ""}...
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <p className="badge bg-primary text-light">{source}</p>
          <br />
          <Link className="btn btn-outline-primary" to={`/source/${title}`}>
            Read More &rarr;
          </Link>
        </div>
      </div>
    </>
  );
};

export default Newsitem;
