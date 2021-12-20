import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

export const BtnViewMore = () => {
  return (
    <div>
      <input className="buttonViewMore" type="submit" value="View more >>" />
    </div>
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
  return (
    <Link to={`watch/${props.id}`}>
      <button
        onClick={() => window.scroll(0, 0)}
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
