import React, { useState } from "react";
import { Link } from "react-router-dom";
import { img_500, unavailable } from "../config";
import { BtnFavorite, BtnWatch } from "../Button/Button";

function Item(props) {
  const [detail, setDetail] = useState({});
  const [hover, setHover] = useState({
    opacity: 0,
    visibility: "hidden",
  });
  const [position, setPosition] = useState({});
  const handleFlySpan = (e, id) => {
    props.array.forEach((item) => {
      if (item.id === id) {
        setDetail(item);
      }
    });
    if (e.target.getBoundingClientRect().top <= 200) {
      if (e.target.getBoundingClientRect().left <= 531) {
        setPosition({
          top: e.target.offsetTop + 100,
          left: e.target.offsetLeft + 20,
        });
      } else {
        setPosition({
          top: e.target.offsetTop + 100,
          left: e.target.offsetLeft - 180,
        });
      }
    } else {
      if (e.target.getBoundingClientRect().left <= 531) {
        setPosition({
          top: e.target.offsetTop - 150,
          left: e.target.offsetLeft + 20,
        });
      } else {
        setPosition({
          top: e.target.offsetTop - 150,
          left: e.target.offsetLeft - 180,
        });
      }
    }
    setHover({
      opacity: 1,
      visibility: "visible",
    });
  };

  const handleClear = (e) => {
    setHover({
      opacity: 0,
      visibility: "hidden",
    });
  };

  return (
    <div
      className="list-items"
      onMouseLeave={(e) => {
        handleClear(e);
      }}
    >
      {props.array.map((item, i) => {
        return (
          <Link
            key={i}
            to={`/${
              props.type
                ? props.type.includes("movie")
                  ? "movie"
                  : "tv"
                : null
            }/${(item.name ? item.name : item.title).replaceAll(" ", "-")}/${
              item.id
            }`}
          >
            <div
              className="list-item"
              onClick={() => window.scroll(0, 0)}
              onMouseEnter={(e) => handleFlySpan(e, item.id)}
              style={{
                backgroundImage: `url(${
                  item.poster_path ? img_500 + item.poster_path : unavailable
                })`,
              }}
            >
              <span className="list-span">HD-VIetsub</span>
              <ion-icon name="caret-forward-circle-sharp"></ion-icon>
            </div>
          </Link>
        );
      })}
      <div
        className="list-fly"
        style={{
          top: position.top,
          left: position.left,
          opacity: hover.opacity,
          visibility: hover.visibility,
        }}
      >
        <h1 className="list-fly-name">
          {detail.title ? detail.title : detail.name}
        </h1>
        <div className="list-fly-group">
          <span className="list-fly-imdb">
            IMDb: {detail.vote_average ? detail.vote_average.toFixed(1) : null}
          </span>
          <span className="list-fly-release">{detail.release_date}</span>
        </div>
        <p className="list-fly-overview">{detail.overview}</p>
        <BtnWatch
          id={detail.id}
          name={detail.title ? detail.title : detail.name}
          type={props.type}
        />
        <BtnFavorite />
      </div>
    </div>
  );
}

export default Item;
