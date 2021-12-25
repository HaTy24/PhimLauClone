import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl, key } from "../config";
import { BtnViewMore } from "../Button/Button";
import "./List.scss";
import Item from "./Item";

function LNewTV() {
  const [newTV, setNewTV] = useState([]);

  useEffect(() => {
    axios
      .get(BaseUrl + "tv/popular" + key)
      .then((response) => setNewTV(response.data.results.slice(0, 16)));
  }, []);

  return (
    <div>
      <div className="list">
        <div className="list-navigation">
          <div className="list-navigation-left">
            <h1>Phim Bộ Mới </h1>
          </div>
          <BtnViewMore api={"/tv/popular"} />
        </div>
        <div>
          <Item array={newTV} type={"/tv"} />
        </div>
      </div>
    </div>
  );
}

export default LNewTV;
