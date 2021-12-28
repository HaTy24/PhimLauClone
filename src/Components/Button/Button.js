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

export const BtnWatchNow = () => {
  return (
    <button type="submit" className="buttonWatchNow">
      Watching Now
    </button>
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
        <FacebookIcon size={40} round={true} />
        Share
      </button>
    </FacebookShareButton>
  );
};

export const BtnPlayList = () => {
  return (
    <button className="buttonPlayList" type="submit">
      <ion-icon name="add"></ion-icon> Playlist
    </button>
  );
};
