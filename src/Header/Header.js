import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const handleToggle = () => {
    document.querySelector("ul").classList.toggle("active");
    document
      .querySelector(".header-overlay")
      .classList.toggle("active-overlay");
  };

  const handleClear = () => {
    document
      .querySelector(".header-overlay")
      .classList.remove("active-overlay");
    document.querySelector("ul").classList.remove("active");
  };

  const handleScroll = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="header">
      <div className="header-left">
        <div onClick={() => handleToggle()}>
          <ion-icon name="menu"></ion-icon>
        </div>
        <div className="header-overlay" onClick={handleClear}></div>
        <Link to="/">
          <img
            onClick={handleScroll}
            src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/bdd867c5-a095-4df5-b240-31390044b819"
            alt=""
          />
        </Link>
        <ul>
          <li onClick={handleScroll}>
            <Link to="/">Trang chủ</Link>
          </li>
          <li onClick={handleScroll}>
            <Link to="/movie">Phim lẻ</Link>
          </li>
          <li onClick={handleScroll}>
            <Link to="/tv">Phim bộ</Link>
          </li>
          <li onClick={handleScroll}>
            <Link to="/">Quốc gia</Link>
          </li>
          <li onClick={handleScroll}>
            <Link to="/">Năm phát hành</Link>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <form className="header-form">
          <ion-icon name="search"></ion-icon>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
