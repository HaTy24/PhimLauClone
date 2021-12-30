import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { img_500, BaseUrl, key, img_original } from "../config";

import "./ComingUp.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BtnWatchNow } from "../Button/Button";

function Trending() {
  const [comingUp, setComingUp] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const settings = {
    className: "slider",
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 800,
    autoplaySpeed: 3000,
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

  return (
    <>
      <div className="trending">
        <Slider {...settings}>
          {comingUp.map((item) => {
            return (
              <div>
                <div
                  className="trending-top"
                  style={{
                    backgroundImage: `url(${
                      img_original + item.backdrop_path
                    })`,
                  }}
                >
                  <div className="trending-moreInfo">
                    <h1 className="trending-name">
                      {item.title ? item.title : item.original_title}
                    </h1>
                    <p className="trending-overview">{item.overview}</p>
                    <BtnWatchNow type="movie" name={item.title} id={item.id} />
                  </div>
                  <img src={`${img_500}${item.poster_path}`} alt="" />
                </div>
              </div>
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
                    <img src={`${img_500}${item.poster_path}`} alt="" />
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
