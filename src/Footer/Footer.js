import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3 className="footer-title">
          How is Phim Phim's online high-quality movie different from other
          movie sites?
        </h3>
        <ul className="footer-items">
          <li>
            <ion-icon name="checkbox"></ion-icon>
            As a bluray (reencoded) movie, the lowest resolution is Full HD
            (1080p), while most other movie sites only have up to the highest
            resolution HD (720p).
          </li>
          <li>
            <ion-icon name="checkbox"></ion-icon>
            Suitable for viewing on TV screens, computers, laptops with high
            resolution high
          </li>
        </ul>
      </div>
      <div className="footer-center">
        <div>
          <ion-icon name="videocam"></ion-icon>
          <h2>Billion Movie</h2>
        </div>
        <span>Your free movie store</span>
      </div>
      <div className="footer-right">
        <h3 className="footer-title">CONTACT US</h3>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
      </div>
    </div>
  );
}

export default Footer;
