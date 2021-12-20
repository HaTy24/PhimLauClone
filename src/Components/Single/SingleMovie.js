import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BaseUrl, key } from "../config";
import "./Single.scss";

function SingleMovie() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <div className="single">
      <Link to="/">Trang Chủ</Link>
      <span>/</span>
      <iframe
        id="iframe"
        src={`https://www.2embed.ru/embed/tmdb/movie?id=${id}`}
        width="100%"
        height="550px"
        frameborder="0"
        title="movie"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default SingleMovie;
