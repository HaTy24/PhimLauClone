import axios from "axios";
import React, { useEffect, useState, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { BaseUrl, key } from "../config";
import Item from "../List/Item";
import "./ViewMore.scss";

//InitState
const initState = 1;
//Actions
const First_Page = "first";
const Last_Page = "last";
const Next_Page = "next";
const Prev_Page = "prev";
const Prev2_Page = "prev2";
const Next2_Page = "next2";
//Reducer
const reducer = (state, action) => {
  switch (action) {
    case First_Page:
      return 1;
    case Last_Page:
      return 300;
    case Next_Page:
      if (state < 300) {
        return state + 1;
      } else {
        return state;
      }
    case Next2_Page:
      if (state < 300) {
        return state + 2;
      } else {
        return state;
      }
    case Prev_Page:
      if (state > 1) {
        return state - 1;
      } else {
        return state;
      }
    case Prev2_Page:
      if (state > 2) {
        return state - 2;
      } else {
        return state;
      }
    default:
      return state;
  }
};

function ViewMore() {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  const [viewMore, setViewMore] = useState([]);
  const [page, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    axios
      .get(
        BaseUrl + pathName + "/popular" + key + `&language=en-US&page=${page}`
      )
      .then((response) => setViewMore(response.data.results));
    const input = document.querySelectorAll("input");
    input.forEach((item) => {
      if (item.value == page) {
        item.style.backgroundColor = "red";
      }
    });
  }, [pathName, page]);

  return (
    <div className="viewMore">
      <h1>{pathName === "movie" ? "Movie" : "TV"}</h1>
      <Item array={viewMore} type={`/${pathName}`} />
      <div className="viewMore-pagination">
        <input
          className="viewMore-first"
          type="button"
          onClick={() => {
            dispatch(First_Page);
            window.scroll(0, 0);
          }}
          value="First"
        />
        <input
          type="button"
          onClick={() => {
            dispatch(Prev2_Page);
            window.scroll(0, 0);
          }}
          value={page >= 3 ? parseInt(page) - 2 : "..."}
        />
        <input
          type="button"
          onClick={() => {
            dispatch(Prev_Page);
            window.scroll(0, 0);
          }}
          value={page >= 2 ? parseInt(page) - 1 : "..."}
        />

        <input type="button" value={page} />

        <input
          type="button"
          onClick={() => {
            dispatch(Next_Page);
            window.scroll(0, 0);
          }}
          value={page < 300 ? parseInt(page + 1) : "..."}
        />
        <input
          type="button"
          onClick={() => {
            dispatch(Next2_Page);
            window.scroll(0, 0);
          }}
          value={page < 300 ? parseInt(page) + 2 : "..."}
        />

        <input
          className="viewMore-last"
          type="button"
          onClick={() => {
            dispatch(Last_Page);
            window.scroll(0, 0);
          }}
          value="Last"
        />
      </div>
    </div>
  );
}

export default ViewMore;
