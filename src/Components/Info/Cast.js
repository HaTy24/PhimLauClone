import React, { useState, useEffect } from "react";
import { BaseUrl, key, img_300, unavailable } from "../config";
import Slider from "react-slick";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import "./Cast.scss";
import { DialogContent } from "@mui/material";
import { Link } from "react-router-dom";

function Cast(props) {
  const [cast, setCast] = useState([]);
  const [open, setOpen] = useState(false);
  const [credit, setCredit] = useState({});
  const settings = {
    className: "cast-slider",
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    centerMode: true,
    centerPadding: "110px",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
    ],
  };
  useEffect(() => {
    axios
      .get(BaseUrl + props.type + "/" + props.id + "/credits" + key)
      .then((response) => setCast(response.data));
  }, [props]);

  const handleClickOpen = (creditID) => {
    axios
      .get(BaseUrl + "credit/" + creditID + key)
      .then((response) => setCredit(response.data.person));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChoose = () => {
    setOpen(false);
    window.scroll(0, 0);
  };

  return (
    <div className="cast">
      <h2 className="trailer-title">Cast</h2>
      <span style={{ marginBottom: "20px", color: "#aaa" }}>
        Double click to view more...
      </span>
      <Slider {...settings}>
        {cast.cast
          ? cast.cast.slice(0, 20).map((item, i) => {
              return (
                <div
                  className="cast-item"
                  key={i}
                  onDoubleClick={() => handleClickOpen(item.credit_id)}
                >
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
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth>
        <DialogTitle
          style={{
            color: "red",
            textTransform: "uppercase",
            display: "flex",
            gap: "20px",
          }}
        >
          <img
            style={{ width: "100px" }}
            src={img_300 + credit.profile_path}
            alt=""
          />
          {credit.name}
        </DialogTitle>

        <DialogContent
          style={{ backgroundColor: "#181818", overflow: "hidden" }}
        >
          <h1 className="cast-movie">Known For</h1>
          <DialogContent
            style={{
              color: "red",
              display: "grid",
              gridTemplateColumns: "repeat(3,auto)",
              gap: "20px",
            }}
          >
            {credit.known_for
              ? credit.known_for.map((item) => {
                  return (
                    <Link to={`/${props.type}/${item.title}/${item.id}`}>
                      <div className="credit" onClick={handleChoose}>
                        <h2 className="credit-nameMovie">
                          {item.title ? item.title : item.name}
                        </h2>
                        <img
                          src={img_300 + item.poster_path}
                          alt={item.title}
                        />
                        <span className="credit-overview">{item.overview}</span>
                      </div>
                    </Link>
                  );
                })
              : null}
          </DialogContent>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Cast;
