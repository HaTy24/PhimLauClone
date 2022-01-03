import React, { useState, useEffect } from "react";
import { BaseUrl, key, img_500, img_original } from "../config";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { BtnPlay, BtnPlayList, BtnShare } from "../Button/Button";
import Cast from "./Cast";
import Video from "./Video";
import Similar from "./Similar";

import "./Info.scss";

function Info() {
  const [detail, setDetail] = useState([]);
  const hour = Math.floor(detail.runtime / 60);
  const min = detail.runtime - hour * 60;
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const name = location.pathname.split("/")[2];
  const id = location.pathname.split("/")[3];
  const storage = [];

  useEffect(() => {
    axios
      .get(BaseUrl + type + "/" + id + key)
      .then((response) => setDetail(response.data))
      .then(() => (document.title = "Netflix | " + name.replaceAll("-", " ")));
  }, [type, id, name]);

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
    <div>
      <div
        className="container"
        style={{
          backgroundImage: `url(${img_original + detail.backdrop_path})`,
        }}
      >
        <div className="info">
          <div className="info-left">
            <img src={`${img_500}/${detail.poster_path}`} alt="" />
            <Link to={`/${type}/${name}/${id}/watch`}>
              <BtnPlay />
            </Link>
          </div>
          <div className="info-right">
            <h1 className="info-title">
              {detail.title ? detail.title : detail.name}
            </h1>
            <span className="info-runtime">
              {detail.runtime
                ? hour + " hour " + min + " minute"
                : detail.number_of_episodes +
                  " Episodes ( " +
                  detail.number_of_seasons +
                  " Seasons )"}
            </span>
            <div className="info-point">
              <span className="info-imdb">IMDb</span>
              <span className="info-average">{detail.vote_average}</span>
            </div>
            <div className="info-button">
              <div style={{ display: "flex", gap: "15px" }}>
                <BtnShare />
                <BtnPlayList
                  id={detail.id}
                  name={detail.title ? detail.title : detail.name}
                  img={detail.poster_path}
                  type={type}
                />
              </div>
              <div className="info-genres">
                <span>Category:</span>
                {detail.genres
                  ? detail.genres.slice(0, 3).map((item, i) => {
                      return (
                        <span key={i} className="info-genre">
                          {item.name}
                        </span>
                      );
                    })
                  : null}
              </div>
            </div>
            <span className="info-countries">
              <span>Country:</span>
              {detail.production_countries
                ? detail.production_countries.map((item) => {
                    return item.name;
                  })
                : null}
            </span>
            <span className="info-releasedate">
              <span>Release Date:</span>
              {detail.release_date
                ? detail.release_date
                : detail.first_air_date}
            </span>
            <p className="info-overview">{detail.overview}</p>
          </div>
        </div>
      </div>
      <Cast id={id} type={type} />
      <Video id={id} type={type} />
      <Similar id={id} type={type} />
    </div>
  );
}

export default Info;
