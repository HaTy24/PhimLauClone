import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BtnPlayList, BtnShare } from "../Button/Button";
import { BaseUrl, key } from "../config";
import "./WatchMovie.scss";

function SingleMovie() {
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[3];
  const [detail, setDetail] = useState([]);
  const [episode, setEpisode] = useState(1);
  const [season, setSeason] = useState(1);
  const Episode = [];
  const Season = [];
  useEffect(() => {
    axios
      .get(BaseUrl + type + "/" + id + key)
      .then((response) => setDetail(response.data))
      .then(() => {
        if (type !== "movie") {
          document.querySelectorAll(".episode")[
            episode - 1
          ].style.backgroundColor = "red";
        }

        if (type !== "movie") {
          document.querySelectorAll(".season")[
            season - 1
          ].style.backgroundColor = "red";
        }
      });
  }, [type, id, episode, season]);

  for (let i = 1; i <= detail.number_of_episodes; i++) {
    Episode.push(i);
  }
  for (let i = 1; i <= detail.number_of_seasons; i++) {
    Season.push(i);
  }

  const handleChangeEpisode = (e) => {
    const page = document.querySelectorAll(".episode");
    setEpisode(e.target.value.slice(4));
    for (let i of page) {
      i.style.backgroundColor = "#303030";
    }
    e.target.style.backgroundColor = "red";
  };
  const handleChangeSeason = (e) => {
    setSeason(e.target.value.slice(5));
    const season = document.querySelectorAll(".season");
    for (let i of season) {
      i.style.backgroundColor = "#303030";
    }
    e.target.style.backgroundColor = "red";
  };

  return (
    <div className="single">
      <iframe
        id="iframe"
        src={`https://www.2embed.ru/embed/tmdb/${type}?id=${id} + type === "movie"
            ? ""
            : &s=${season}&e=${episode}`}
        width="100%"
        height="500px"
        frameborder="0"
        title="movie"
        allowFullScreen
      ></iframe>
      <div className="single-title">
        <h1>{detail.title ? detail.title : detail.name}</h1>

        <div className="single-button">
          <BtnShare />
          <BtnPlayList />
        </div>
      </div>
      <div className="single-season">
        {Season.map((item) => {
          return (
            <input
              type="button"
              className="season"
              value={`Phần ${item}`}
              onClick={(e) => handleChangeSeason(e)}
            />
          );
        })}
      </div>
      <div className="single-episode">
        {Episode.map((item) => {
          return (
            <input
              type="button"
              className="episode"
              onClick={(e) => handleChangeEpisode(e)}
              value={`Tập ${item}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SingleMovie;
