import React from "react";
import { Link } from "react-router-dom";
import { BtnLogin } from "../Components/Button/Button";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/bdd867c5-a095-4df5-b240-31390044b819"
          alt=""
        />
        <Link to="/">Trang chủ</Link>
        <Link to="/">Phim lẻ</Link>
        <Link to="/">Phim bộ</Link>
        <Link to="/">Quốc gia</Link>
        <Link to="/">Năm phát hành</Link>
      </div>
      <div className="header-right">
        <form className="header-form">
          <BtnLogin />
          <ion-icon name="search"></ion-icon>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
