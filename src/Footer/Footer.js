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
            <ion-icon name="checkmark-done-circle"></ion-icon>
            Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD
            (1080p), trong khi hầu hết các trang phim khác chỉ có tới độ phân
            giải HD (720p) là cao nhất
          </li>
          <li>
            <ion-icon name="checkmark-done-circle"></ion-icon>
            Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần
            phim online thông thường - đây là yếu tố quyết định độ nét của phim
            (thậm chí còn quan trọng hơn độ phân giải)
          </li>
          <li>
            <ion-icon name="checkmark-done-circle"></ion-icon>
            Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang
            phim khác (kể cả Youtube)
          </li>
          <li>
            <ion-icon name="checkmark-done-circle"></ion-icon>
            Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải
            cao
          </li>
          <li>
            <ion-icon name="checkmark-done-circle"></ion-icon>
            Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề
            của riêng mình để xem online
          </li>
          <li>
            <ion-icon name="checkmark-done-circle"></ion-icon>
            Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả tiếng Anh &
            tiếng Việt), phù hợp với những người muốn học tiếng Anh qua phụ đề
            phim
          </li>
        </ul>
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
