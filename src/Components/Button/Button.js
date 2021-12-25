import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

export const BtnViewMore = (props) => {
  return (
    <Link to={`${props.api ? props.api.split("/")[1] : null}`}>
      <input className="buttonViewMore" type="submit" value="View more >>" />
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
  };
  return (
    <Link
      to={`/${props.type ? props.type.split("/")[1] : null}/${
        props.name ? props.name.replaceAll(" ", "") : null
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
      <ion-icon name="play"></ion-icon> Xem Phim
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
    <button className="buttonShare" type="submit">
      <ion-icon name="logo-facebook"></ion-icon> Chia sẻ
    </button>
  );
};

export const BtnPlayList = () => {
  return (
    <button className="buttonPlayList" type="submit">
      <ion-icon name="add"></ion-icon> Bộ Sưu Tập
    </button>
  );
};
