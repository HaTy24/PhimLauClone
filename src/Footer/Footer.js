import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3 className="footer-title">
          Phim chất lượng cao online của XemPhim khác gì so với các trang phim
          khác?
        </h3>
        <ul className="footer-items">
          <li>
            <ion-icon name="checkbox"></ion-icon>
            Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD
            (1080p), trong khi hầu hết các trang phim khác chỉ có tới độ phân
            giải HD (720p) là cao nhất
          </li>
          <li>
            <ion-icon name="checkbox"></ion-icon>
            Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải
            cao
          </li>
        </ul>
      </div>
      <div className="footer-center">
        <div>
          <ion-icon name="videocam"></ion-icon>
          <h2>Billion Movie</h2>
        </div>
        <span>Kho phim miễn phí của bạn</span>
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
