import React from "react";
import Info from "./Info";
import Cast from "./Cast";
import Video from "./Video";
import Similar from "./Similar";
import { useLocation } from "react-router-dom";

function Total() {
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[3];
  return (
    <div>
      <Info />
      <Cast id={id} type={type} />
      <Video id={id} type={type} />
      <Similar id={id} type={type} />
    </div>
  );
}

export default Total;
