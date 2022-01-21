import React, { useContext } from "react";
import { BtnViewMore } from "../Button/Button";
import Item from "./Item";
import { LocalState } from "../../Context/DetailAPI";
import "./List.scss";
import "../../Sass/Grid.scss";

function LNewMovie() {
  const Value = useContext(LocalState);

  return (
    <div>
      <div className="list grid wide">
        <div className="list-navigation">
          <div className="list-navigation-left">
            <h1>New Movies </h1>
            <BtnViewMore api={"/movie/popular"} />
          </div>
        </div>
        <div>
          <Item array={Value.newMovie.slice(0, 10)} type={"/movie"}></Item>
        </div>
      </div>
    </div>
  );
}

export default LNewMovie;
