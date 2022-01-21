import React, { useContext } from "react";
import { BtnViewMore } from "../Button/Button";
import Item from "./Item";
import { LocalState } from "../../Context/DetailAPI";
import "./List.scss";
import "../../Sass/Grid.scss";

function LNewTV() {
  const Value = useContext(LocalState);

  return (
    <div>
      <div className="list grid wide">
        <div className="list-navigation">
          <div className="list-navigation-left">
            <h1>New TV Series </h1>
            <BtnViewMore api={"/tv/popular"} />
          </div>
        </div>
        <div>
          <Item array={Value.newTV.slice(0, 10)} type={"/tv"} />
        </div>
      </div>
    </div>
  );
}

export default LNewTV;
