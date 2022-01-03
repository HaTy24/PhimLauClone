import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-center">
        <div>
          <ion-icon name="videocam"></ion-icon>
          <h2>Billion Movie</h2>
        </div>
        <span>Your free movie store</span>
      </div>
      <div className="footer-right">
        <h3 className="footer-title">CONTACT ME</h3>
        <a href="https://www.facebook.com/ty.hathien/" title="">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>

        <ion-icon name="logo-twitter"></ion-icon>
      </div>
    </div>
  );
}

export default Footer;
