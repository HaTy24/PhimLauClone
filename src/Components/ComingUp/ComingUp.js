import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { img_300, img_500, BaseUrl, key } from "../config";

import "./ComingUp.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BtnWatchNow } from "../Button/Button";

function Trending() {
  const [comingUp, setComingUp] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [detail, setDetail] = useState([]);
  const [hover, setHover] = useState("");
  const [border, setBorder] = useState("");
  const settings = {
    dots: true,
    className: "slider",
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    fade: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get(`${BaseUrl}movie/upcoming${key}`)
      .then(function (response) {
        // handle success
        setComingUp(response.data.results.slice(0, 16));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${BaseUrl}movie/now_playing${key}`)
      .then((response) => setNowPlaying(response.data.results));
  }, []);
  const handleMoreInfo = (id) => {
    comingUp.forEach((item) => {
      if (item.id === id) {
        setDetail(item);
      }
    });
    setHover("display");
    setBorder("border");
  };
  const handleClearInfo = () => {
    setDetail([]);
    setHover("");
  };
  return (
    <>
      <div className="trending">
        <Slider {...settings}>
          {comingUp.map((item) => {
            return (
              <Link
                to={`movie/${item.title.replaceAll(" ", "")}/${item.id}`}
                key={item.id}
              >
                <div
                  onMouseEnter={() => handleMoreInfo(item.id)}
                  onMouseLeave={handleClearInfo}
                >
                  <img
                    src={`${img_500}${
                      item.backdrop_path ? item.backdrop_path : item.poster_path
                    }`}
                    alt=""
                  />
                  <div className={`trending-moreInfo ${hover}`}>
                    <h1 className="trending-name">
                      {detail.title ? detail.title : detail.original_title}
                    </h1>
                    <p className="trending-overview">{detail.overview}</p>
                    <div className={`trending-about ${border}`}>
                      <span className="trending-release">
                        <label>Release Date</label>
                        {detail.release_date}
                      </span>
                      <span className="trending-vote">
                        <label>IMDb</label>
                        {detail.vote_average}
                      </span>
                    </div>
                    <BtnWatchNow />
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
        <div className="trending-nowPlaying">
          <span className="trending-nowPlaying-title">Now Playing</span>
          <div className="trending-nowPlaying-items">
            {nowPlaying.map((item, i) => {
              return (
                <Link
                  to={`movie/${item.title.replaceAll(" ", "")}/${item.id}`}
                  key={i}
                >
                  <div
                    className="trending-nowPlaying-item"
                    onClick={() => window.scroll(0, 0)}
                  >
                    <img src={`${img_300}${item.poster_path}`} alt="" />
                    <div>
                      <span>{item.title}</span>
                      <p>Release Date: {item.release_date}</p>
                      <p>IMDb: {item.vote_average}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <p className="slogan">Bring Hollywood to your mobile!</p>
    </>
  );
}

export default Trending;
