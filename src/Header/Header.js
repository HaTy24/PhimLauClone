import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import "./Header.scss";

function Header({ Search }) {
  const [email, setEmail] = useState({});
  const location = useLocation();
  const handleToggle = () => {
    document.querySelector("ul").classList.toggle("active");
    document
      .querySelector(".header-overlay")
      .classList.toggle("active-overlay");
  };
  useEffect(() => {
    document.querySelectorAll("li").forEach((item) => {
      item.style.color = "white";
    });
    if (location.pathname === "/") {
      document.querySelector(".home").style.color = "red";
    } else if (location.pathname.slice(0, 6) === "/movie") {
      document.querySelector(".movie").style.color = "red";
    } else if (location.pathname.slice(0, 3) === "/tv") {
      document.querySelector(".tv").style.color = "red";
    } else if (location.pathname.slice(0, 7) === "/search") {
      document.querySelector(".tim").style.color = "red";
    }
  }, [location.pathname]);

  const handleClear = () => {
    document
      .querySelector(".header-overlay")
      .classList.remove("active-overlay");
    document.querySelector("ul").classList.remove("active");
  };

  const handleScroll = () => {
    window.scroll(0, 0);
    document
      .querySelector(".header-overlay")
      .classList.remove("active-overlay");
    document.querySelector("ul").classList.remove("active");
  };

  window.addEventListener("scroll", toggleHeader);
  function toggleHeader() {
    const header = document.querySelector(".header");
    window.scrollY >= 50
      ? (header.style.backgroundColor = "#303030")
      : (header.style.backgroundColor = "transparent");
  }
  const handleLogin = (googleData) => {
    setEmail(googleData.profileObj);
  };
  const handleLogout = () => {
    setEmail({});
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
          <li className="home" onClick={handleScroll}>
            <Link to="/">Home</Link>
          </li>
          <li className="movie" onClick={handleScroll}>
            <Link to="/movie">Movies</Link>
          </li>
          <li className="tv" onClick={handleScroll}>
            <Link to="/tv">TV Series</Link>
          </li>
          <li className="tim" onClick={handleScroll}>
            <Link to="/search">Search</Link>
          </li>
          {/* <li onClick={handleScroll}>
            <Link to="/">Release Year</Link>
          </li> */}
        </ul>
      </div>
      <div className="header-right">
        <form className="header-form">
          {Object.values(email).length === 0 ? (
            <GoogleLogin
              clientId="982933349203-5igv9aboqqmc4m262bpkt5j77jhcij5p.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="header-form-login"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Login
                </button>
              )}
              buttonText="Login"
              onSuccess={handleLogin}
              cookiePolicy={"single_host_origin"}
            />
          ) : (
            <>
              <div class="header-form-drop">
                <img src={email.imageUrl} alt={email.name} />
                <h1>{email.name}</h1>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
              <div class="header-form-dropdown">
                <h3>
                  <ion-icon name="person-circle-outline"></ion-icon>Account
                </h3>
                <h3>
                  <ion-icon name="logo-bitcoin"></ion-icon>Donate
                </h3>
                <Link to="playlist">
                  <h3>
                    <ion-icon name="albums"></ion-icon>Playlist
                  </h3>
                </Link>
                <h3>{email.email}</h3>

                <GoogleLogout
                  clientId="982933349203-5igv9aboqqmc4m262bpkt5j77jhcij5p.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      className="header-form-logout"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Logout
                    </button>
                  )}
                  buttonText="Logout"
                  onLogoutSuccess={handleLogout}
                ></GoogleLogout>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Header;
