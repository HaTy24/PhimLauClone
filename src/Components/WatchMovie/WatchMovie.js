import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BtnPlayList, BtnShare } from "../Button/Button";
import { BaseUrl, key } from "../config";
import "./WatchMovie.scss";
import "../../Sass/Grid.scss";
import Similar from "../Info/Similar";

function SingleMovie() {
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const name = location.pathname.split("/")[2];
  const id = location.pathname.split("/")[3];
  const tap = parseInt(location.search === "" ? 1 : location.search.slice(8));
  const [detail, setDetail] = useState([]);
  const [episode, setEpisode] = useState(1);
  const [season, setSeason] = useState(1);
  const Episode = [];
  const Season = [];
  const storage = [];

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
  }, [type, id]);

  useEffect(() => {
    document.title =
      "Netflix | " + name.replaceAll("-", " ") + " ( Watching... )";
  }, [name]);

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

  useEffect(() => {
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      storage.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    const playList = document.querySelector(".buttonPlayList");
    const check = storage.some((i) => {
      return i.id === parseInt(id);
    });

    if (check === true) {
      playList.innerHTML = "Added Playlist ";
      playList.style.border = "1px solid green";
      playList.disabled = true;
    } else {
      playList.style.border = "1px solid red";
      playList.innerHTML = '<ion-icon name="add"></ion-icon> Playlist';
      playList.disabled = false;
    }
  });

  return (
    <div className="single">
      <iframe
        id="iframe"
        src={`https://www.2embed.ru/embed/tmdb/${type}?id=${id} + type === "movie"
            ? ""
            : &s=${season}&e=${tap}`}
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
          <BtnPlayList
            id={detail.id}
            name={detail.title ? detail.title : detail.name}
            img={detail.poster_path}
            type={type}
          />
        </div>
      </div>
      <div className="single-season">
        {Season.map((item, i) => {
          return (
            <Link to={`?Season` + item}>
              <input
                type="button"
                className="season"
                value={`Season ${item}`}
                onClick={(e) => handleChangeSeason(e)}
              />
            </Link>
          );
        })}
      </div>
      <div className="single-episode">
        {Episode.map((item) => {
          return (
            <Link to={`?episode` + item}>
              <input
                type="button"
                className="episode"
                onClick={(e) => handleChangeEpisode(e)}
                value={`Episode ${item}`}
              />
            </Link>
          );
        })}
      </div>
      <Similar id={id} type={type} />
    </div>
  );
}

export default SingleMovie;
