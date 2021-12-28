import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BaseUrl, key } from "../config";

function Credits() {
  const location = useLocation();
  const idCredit = location.pathname.split("~")[1];
  const [credit, setCredit] = useState([]);

  useEffect(() => {
    axios
      .get(BaseUrl + "credit/" + idCredit + key)
      .then((response) => console.log(response.data.person));
  });
  return (
    <div>
      <img src={credit.profile_path} alt={credit.name} />
      <h1>{credit.name}</h1>
      <div>
        <span>Nghề nghiệp</span>
        <span>{credit.known_for_department}</span>
      </div>
      <div>
        <span></span>
      </div>

      {credit.map((item) => {})}
    </div>
  );
}

export default Credits;
