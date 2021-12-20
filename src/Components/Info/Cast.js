import React, { useState, useEffect } from "react";
import { BaseUrl, key, img_300, img_500 } from "../config";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import "./Cast.scss";

function Cast(props) {
  const [cast, setCast] = useState([]);
  const settings = {
    className: "cast-slider",
    infinite: true,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "0px",
    swipeToSlide: true,
    slidesToShow: 6,
    speed: 500,
  };
  useEffect(() => {
    axios
      .get(BaseUrl + props.type + "/" + props.id + "/credits" + key)
      .then((response) => setCast(response.data));
  }, []);
  return (
    <div className="cast">
      <Slider {...settings}>
        {cast.cast
          ? cast.cast.slice(0, 15).map((item) => {
              return (
                <div
                  style={{
                    display: item.profile_path === null ? "none" : "block",
                  }}
                  className="cast-item"
                >
                  <img src={img_300 + item.profile_path} alt="" />
                  <h3>{item.name}</h3>
                  <span>{item.character}</span>
                </div>
              );
            })
          : null}
      </Slider>
    </div>
  );
}

export default Cast;
