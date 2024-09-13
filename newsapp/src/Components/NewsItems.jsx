import React from "react";

const NewsItems = (props) => {
  let { title, description, imgurl, newsurl, author, date } = props;

  return (
    <div className="my-3">
      <div
        className="card"
        style={{
          background: "linear-gradient(to bottom, #0074cc, #ffffff)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
        }}
      >
        <img
          src={
            !imgurl
              ? "https://c.ndtvimg.com/2024-02/ehsng2l8_earth-from-space_625x300_19_February_24.jpeg?ver-20240117.06"
              : imgurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              by {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
