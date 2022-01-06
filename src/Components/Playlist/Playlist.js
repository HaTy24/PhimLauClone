import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BtnClearPlaylist } from "../Button/Button";
import { img_500 } from "../config";
import "./Playlist.scss";

function Playlist() {
  const [, setRerender] = useState(0);

  const storage = [];
  for (var i = 0, len = localStorage.length; i < len; ++i) {
    const results = JSON.parse(localStorage.getItem(localStorage.key(i)));
    storage.push(results);
  }

  const reload = (data) => {
    setRerender(data + 1);
  };

  return (
    <div className="playlist">
      <h1 className="viewMore-title"> Your Playlist</h1>
      <BtnClearPlaylist reload={reload} />
      {storage.length !== 0 ? (
        storage.map((item, i) => {
          return (
            <Link
              to={`/${item.type}/${item.name.replaceAll(" ", "-")}/${item.id}`}
            >
              <div className="playlist-item">
                <span>{i + 1}</span>
                <img src={img_500 + item.img} alt="" />
                <span className="playlist-name">
                  {item.name} <ion-icon name="play"></ion-icon>
                </span>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem(item.id);
                    setRerender(Math.random());
                  }}
                >
                  <ion-icon name="close"></ion-icon>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <span className="playlist-empty">Playlist is empty !!!</span>
      )}
    </div>
  );
}

export default Playlist;
