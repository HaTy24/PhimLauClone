import axios from "axios";
import React, { useEffect, useState } from "react";
import { BtnSearch } from "../Button/Button";
import { BaseUrl, key } from "../config";
import Item from "../List/Item";
import "./Search.scss";

function Credits() {
  const [input, setInput] = useState("spider");
  const [search, setSearch] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get(BaseUrl + "search/movie" + key + "&query=" + input)
      .then((response) => setSearch(response.data.results));
  }, []);

  const handleSearch = () => {
    axios
      .get(BaseUrl + "search/movie" + key + "&query=" + input)
      .then((response) => setSearch(response.data.results));
  };

  return (
    <div className="search">
      <div className="search-form">
        <input
          type="text"
          placeholder="Nhập tên bộ phim..."
          onChange={(e) => handleInput(e)}
        />
        <BtnSearch handleS={handleSearch} />
      </div>
      <Item array={search} type={"/movie"} />
    </div>
  );
}

export default Credits;
