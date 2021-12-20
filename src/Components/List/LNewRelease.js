import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl, img_300, key } from "../config";
import { BtnFavorite, BtnViewMore, BtnWatch } from "../Button/Button";
import { Link } from "react-router-dom";
import "./List.scss";

function LNewRelease() {
  const [newRelease, setNewRelease] = useState([]);
  const [api, setApi] = useState("trending/movie/week");
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
      .get(BaseUrl + `${api}` + key)
      .then((response) => setNewRelease(response.data.results.slice(0, 16)));
  }, [api]);

  const handleGetApi = (e) => {
    const navigation = document.querySelectorAll("#li");
    for (let key of navigation) {
      key.classList.remove("active");
    }
    setApi(e.target.getAttribute("value"));
    e.target.classList.add("active");
  };
  const handleFlySpan = (e, id) => {
    newRelease.forEach((item) => {
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
    <div className="list">
      <div className="list-navigation">
        <div className="list-navigation-left">
          <h1>Phim Phát Hành Năm 2021</h1>
          <ul>
            <li
              id="li"
              className="active"
              onClick={(e) => handleGetApi(e)}
              value="trending/movie/week"
            >
              Featured
            </li>
            <li
              id="li"
              onClick={(e) => handleGetApi(e)}
              value="movie/top_rated"
            >
              Top Rating
            </li>
            <li id="li" onClick={(e) => handleGetApi(e)} value="tv/top_rated">
              TV Top Rating
            </li>
            <li
              id="li"
              onClick={(e) => handleGetApi(e)}
              value="tv/airing_today"
            >
              TV Airing Today
            </li>
            <li id="li" onClick={(e) => handleGetApi(e)} value="tv/on_the_air">
              TV On The Air
            </li>
          </ul>
        </div>
        <BtnViewMore />
      </div>
      <div
        onMouseLeave={() => {
          handleClear();
        }}
      >
        <div className="list-items">
          {newRelease.map((item, i) => {
            return (
              <Link
                key={i}
                to={`/${api.includes("movie") ? "movie" : "tv"}/${(item.name
                  ? item.name
                  : item.title
                ).replaceAll(" ", "")}/${item.id}`}
              >
                <div
                  className="list-item"
                  onClick={() => window.scroll(0, 0)}
                  onMouseEnter={(e) => handleFlySpan(e, item.id)}
                  style={{
                    backgroundImage: `url(${img_300}${item.poster_path})`,
                  }}
                >
                  <span className="list-span">HD-VIetsub</span>
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
  );
}

export default LNewRelease;
