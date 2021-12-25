import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl, key } from "../config";
import { BtnViewMore } from "../Button/Button";
import "./List.scss";
import Item from "./Item";

function LNewMovie() {
  const [newMovie, setNewMovie] = useState([]);

  useEffect(() => {
    axios
      .get(BaseUrl + "movie/popular" + key)
      .then((response) => setNewMovie(response.data.results.slice(0, 16)));
  }, []);

  return (
    <div>
      <div className="list">
        <div className="list-navigation">
          <div className="list-navigation-left">
            <h1>Phim Lẻ Mới </h1>
          </div>
          <BtnViewMore api={"/movie/popular"} />
        </div>
        <div>
          <Item array={newMovie} type={"/movie"}></Item>
        </div>
      </div>
    </div>
  );
}

export default LNewMovie;
