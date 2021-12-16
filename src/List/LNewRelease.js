import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl, img_300, img_500, key } from "../config";
import { BtnViewMore } from "../Components/Button/Button";
import "./List.scss";

function LNewRelease() {
  const [newRelease, setNewRelease] = useState([]);
  const [api, setApi] = useState("trending/movie/week");
  useEffect(() => {
    axios
      .get(BaseUrl + `${api}` + key)
      .then((response) => setNewRelease(response.data.results.slice(0, 16)));
  });

  const handleGetApi = (e) => {
    const navigation = document.querySelectorAll("#li");
    for (let key of navigation) {
      key.classList.remove("active");
    }
    setApi(e.target.getAttribute("value"));
    e.target.classList.add("active");
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
      <div className="list-items">
        {newRelease.map((item, i) => {
          return (
            <div
              key={i}
              className="list-item"
              style={{ backgroundImage: `url(${img_300}${item.poster_path})` }}
            >
              <span className="list-span">HD-VIetsub</span>
              <h3 className="list-title">{item.title}</h3>
              <ion-icon name="caret-forward-circle-outline"></ion-icon>
              <div className="list-fly">
                <h3 className="list-name">{item.title}</h3>
                <div>
                  <span className="list-imdb">IMBd: {item.vote_average}</span>
                  <span className="list-year">
                    {item.release_date.slice(0, 4)}
                  </span>
                  <span className="list-overview">{item.overview}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
}

export default LNewRelease;
