import React, { useContext } from "react";
import { BtnViewMore } from "../Button/Button";
import "./List.scss";
import Item from "./Item";
import { LocalState } from "../../Context/DetailAPI";

function LNewMovie() {
  const Value = useContext(LocalState);

  return (
    <div>
      <div className="list">
        <div className="list-navigation">
          <div className="list-navigation-left">
            <h1>New Movies </h1>
          </div>
        </div>
        <div>
          <Item array={Value.newMovie.slice(0, 10)} type={"/movie"}></Item>
        </div>
        <BtnViewMore api={"/movie/popular"} />
      </div>
    </div>
  );
}

export default LNewMovie;
