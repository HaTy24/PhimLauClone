import React from "react";
import "./Button.scss";

export const BtnViewMore = () => {
  return (
    <div>
      <input className="buttonViewMore" type="submit" value="View more >>" />
    </div>
  );
};

export const BtnLogin = () => {
  return (
    <div>
      <input className="buttonLogin" type="text" placeholder="Search..." />
    </div>
  );
};
