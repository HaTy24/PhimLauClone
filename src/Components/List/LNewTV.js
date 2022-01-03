import React, { useContext } from "react";
import { BtnViewMore } from "../Button/Button";
import "./List.scss";
import Item from "./Item";
import { LocalState } from "../../Context/DetailAPI";

function LNewTV() {
  const Value = useContext(LocalState);

  return (
    <div>
      <div className="list">
        <div className="list-navigation">
          <div className="list-navigation-left">
            <h1>New TV Series </h1>
          </div>
        </div>
        <div>
          <Item array={Value.newTV.slice(0, 10)} type={"/tv"} />
        </div>
        <BtnViewMore api={"/tv/popular"} />
      </div>
    </div>
  );
}

export default LNewTV;
