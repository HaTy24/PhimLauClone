import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl, img_300, key } from "../config";
import { BtnFavorite, BtnViewMore, BtnWatch } from "../Button/Button";
import "./List.scss";
import { Link } from "react-router-dom";

function LNewMovie() {
  const [newMovie, setNewMovie] = useState([]);
  const [detail, setDetail] = useState({
    genres: [],
  });
  const [hover, setHover] = useState({
    opacity: 0,
    visibility: "hidden",
  });
  const [position, setPosition] = useState({});
  useEffect(() => {
    axios
      .get(BaseUrl + "movie/popular" + key)
      .then((response) => setNewMovie(response.data.results.slice(0, 16)));
  }, []);

  const handleFlySpan = (e, id) => {
    newMovie.forEach((item) => {
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
    <div>
      <div className="list">
        <div className="list-navigation">
          <div className="list-navigation-left">
            <h1>Phim Lẻ Mới </h1>
          </div>
          <BtnViewMore />
        </div>
        <div
          onMouseLeave={() => {
            handleClear();
          }}
        >
          <div className="list-items">
            {newMovie.map((item, i) => {
              return (
                <Link to={`movie/${item.title.replaceAll(" ", "")}/${item.id}`}>
                  <div
                    key={i}
                    className="list-item"
                    onClick={() => window.scroll(0, 0)}
                    onMouseEnter={(e) => handleFlySpan(e, item.id)}
                    style={{
                      backgroundImage: `url(${img_300}${item.poster_path})`,
                    }}
                  >
                    <span className="list-span">HD-VIetsub</span>
                    {/* <h3 className="list-title">
                    {item.name ? item.name : item.title}
                  </h3> */}
                    <ion-icon name="caret-forward-circle-sharp"></ion-icon>
                  </div>
                </Link>
              );
            })}
          </div>
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
              <span className="list-fly-imdb">IMDb: {detail.vote_average}</span>
              <span className="list-fly-release">{detail.release_date}</span>
            </div>
            <p className="list-fly-overview">{detail.overview}</p>
            <BtnWatch id={detail.id} />
            <BtnFavorite />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LNewMovie;
