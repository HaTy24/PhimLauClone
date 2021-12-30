import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl, key } from "../config";
import Item from "../List/Item";
import "./Similar.scss";

function Similar(props) {
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    axios
      .get(BaseUrl + props.type + "/" + props.id + "/similar" + key)
      .then((response) => setSimilar(response.data.results.slice(0, 10)));
  }, [props.id, props.type]);

  return (
    <div className="similar">
      <h1 className="trailer-title">Similar</h1>
      <Item array={similar} type={"/" + props.type} />
    </div>
  );
}

export default Similar;
