import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl, key } from "../config";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import "./Video.scss";

import "../../Sass/Grid.scss";

function Video(props) {
  const [video, setVideo] = useState([]);
  const [open, setOpen] = useState(false);
  const [trailer, setTrailer] = useState({});

  useEffect(() => {
    axios
      .get(BaseUrl + props.type + "/" + props.id + "/videos" + key)
      .then((response) => setVideo(response.data.results));
  }, [props]);

  const handleClickOpen = (keyYT, Name) => {
    setOpen(true);
    setTrailer({
      keyYT: keyYT,
      name: Name,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="trailer grid wide">
      <h2 className="trailer-title">Trailer</h2>
      <div className="trailer-items">
        {video.map((item, i) => {
          return (
            <div
              key={i}
              className="trailer-item"
              onClick={() => handleClickOpen(item.key, item.name)}
            >
              <span className="trailer-name">{item.name}</span>
              <span className="trailer-type">Type: {item.type}</span>
              <span className="trailer-official">
                {item.official === true ? "Official Trailer" : ""}
              </span>
            </div>
          );
        })}
      </div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth>
        <DialogTitle style={{ color: "red", textTransform: "uppercase" }}>
          {trailer.name}
        </DialogTitle>
        <iframe
          className="trailer-iframe"
          src={`https://www.youtube.com/embed/${trailer.keyYT}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Dialog>
    </div>
  );
}

export default Video;
