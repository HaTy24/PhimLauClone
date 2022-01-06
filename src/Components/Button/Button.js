import React from "react";
import { Link } from "react-router-dom";
import { FacebookShareButton, FacebookIcon } from "react-share";
import "./Button.scss";

export const BtnViewMore = (props) => {
  return (
    <Link to={`${props.api ? props.api.split("/")[1] : null}`}>
      <button
        onClick={() => {
          window.scroll(0, 0);
        }}
        className="buttonViewMore"
      >
        View More
        <ion-icon name="duplicate"></ion-icon>
      </button>
    </Link>
  );
};

export const BtnWatchNow = (props) => {
  return (
    <Link to={`/${props.type}/${props.name}/${props.id}`}>
      <button type="submit" className="buttonWatchNow">
        Watching Now
      </button>
    </Link>
  );
};

export const BtnLogin = () => {
  return (
    <div>
      <input className="buttonLogin" type="text" placeholder="Search..." />
    </div>
  );
};

export const BtnWatch = (props) => {
  const handleClearLocation = () => {
    window.scroll(0, 0);
    window.title = props.name;
  };
  return (
    <Link
      to={`/${props.type ? props.type.split("/")[1] : null}/${
        props.name ? props.name.replaceAll(" ", "-") : null
      }/${props.id}/watch`}
    >
      <button
        onClick={() => handleClearLocation()}
        className="buttonWatch"
        type="submit"
      >
        <ion-icon name="caret-forward-outline"></ion-icon> Watch Movies
      </button>
    </Link>
  );
};

export const BtnPlay = () => {
  return (
    <button onClick={() => window.scroll(0, 0)} className="buttonPlay">
      <ion-icon name="play"></ion-icon> Watch Movie
    </button>
  );
};

export const BtnFavorite = () => {
  return (
    <button className="buttonFavorite" type="submit">
      <ion-icon name="heart"></ion-icon> Favorite
    </button>
  );
};

export const BtnShare = () => {
  return (
    <FacebookShareButton url={window.location.href}>
      <button className="buttonShare" type="submit">
        <span>
          Share <ion-icon name="share-social"></ion-icon>
        </span>
        <span>
          <FacebookIcon size={40} round={true} />
        </span>
      </button>
    </FacebookShareButton>
  );
};

export const BtnPlayList = (props) => {
  const key = props.id;
  const Storage = () => {
    const obj = {
      id: props.id,
      name: props.name,
      img: props.img,
      type: props.type,
    };
    const setjson = JSON.stringify(obj);
    localStorage.setItem(key, setjson);
    const playList = document.querySelector(".buttonPlayList");
    playList.innerHTML = "Added Playlist ";
    playList.style.border = "1px solid green";
    playList.disabled = true;
  };
  return (
    <button className="buttonPlayList" type="submit" onClick={Storage}>
      <ion-icon name="add"></ion-icon> Playlist
    </button>
  );
};

export const BtnSearch = ({ handleS }) => {
  const handleSearch = () => {
    handleS();
  };
  return (
    <button onClick={handleSearch} className="buttonSearch" type="submit">
      Tìm Kiếm
    </button>
  );
};

export const BtnClearPlaylist = ({ reload }) => {
  const handleClearPLaylist = () => {
    localStorage.clear();
    reload(Math.floor(Math.random()));
  };
  return (
    <button
      type="submit"
      className="buttonClearPLaylist"
      onClick={handleClearPLaylist}
    >
      Clear All Playlist <ion-icon name="trash-outline"></ion-icon>
    </button>
  );
};
