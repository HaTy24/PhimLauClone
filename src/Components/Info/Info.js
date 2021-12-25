import React, { useState, useEffect } from "react";
import { BaseUrl, key, img_300 } from "../config";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import "./Info.scss";
import { BtnPlay, BtnPlayList, BtnShare } from "../Button/Button";
import Cast from "./Cast";
import Video from "./Video";
import Similar from "./Similar";

function Info() {
  const [detail, setDetail] = useState([]);
  const hour = Math.floor(detail.runtime / 60);
  const min = detail.runtime - hour * 60;
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const name = location.pathname.split("/")[2];
  const id = location.pathname.split("/")[3];

  useEffect(() => {
    axios
      .get(BaseUrl + type + "/" + id + key)
      .then((response) => setDetail(response.data));
  }, [type, id]);

  return (
    <>
      <div className="info">
        <div className="info-left">
          <img src={`${img_300}${detail.poster_path}`} alt="" />
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
              ? hour + " giờ " + min + " phút"
              : detail.number_of_episodes +
                " tập ( " +
                detail.number_of_seasons +
                " phần )"}
          </span>
          <div className="info-point">
            <span className="info-imdb">IMDb</span>
            <span className="info-average">{detail.vote_average}</span>
          </div>
          <div className="info-button">
            <div style={{ display: "flex", gap: "15px" }}>
              <BtnShare />
              <BtnPlayList />
            </div>
            <div className="info-genres">
              <span>Thể Loại:</span>
              {detail.genres
                ? detail.genres.slice(0, 4).map((item) => {
                    return <span className="info-genre">{item.name}</span>;
                  })
                : null}
            </div>
          </div>
          <span className="info-countries">
            <span>Quốc Gia:</span>
            {detail.production_countries
              ? detail.production_countries.map((item) => {
                  return item.name;
                })
              : null}
          </span>
          <span className="info-releasedate">
            <span>Khởi Chiếu:</span>
            {detail.release_date ? detail.release_date : detail.first_air_date}
          </span>
          <p className="info-overview">{detail.overview}</p>
        </div>
      </div>
      <Cast id={id} type={type} />
      <Video id={id} type={type} />
      <Similar id={id} type={type} />
    </>
  );
}

export default Info;
