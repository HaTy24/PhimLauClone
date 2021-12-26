import React, { useState, useEffect } from "react";
import { BaseUrl, key, img_300, unavailable } from "../config";
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
    autoplaySpeed: 3000,
    centerPadding: "0px",
    swipeToSlide: true,
    slidesToShow: 8,
    speed: 500,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
    ],
  };
  useEffect(() => {
    axios
      .get(BaseUrl + props.type + "/" + props.id + "/credits" + key)
      .then((response) => setCast(response.data));
  }, [props]);

  return (
    <div className="cast">
      <h2 className="trailer-title">Diễn Viên</h2>
      <Slider {...settings}>
        {cast.cast
          ? cast.cast.slice(0, 20).map((item, i) => {
              return (
                <div className="cast-item" key={i}>
                  <img
                    src={
                      item.profile_path
                        ? img_300 + item.profile_path
                        : unavailable
                    }
                    alt=""
                  />
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
