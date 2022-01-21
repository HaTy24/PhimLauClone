import axios from "axios";
import React, { useEffect, useState, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { BaseUrl, key } from "../config";
import { Link } from "react-router-dom";
import Item from "../List/Item";
import "./ViewMore.scss";
import "../../Sass/Grid.scss";

function ViewMore({ dataSearch }) {
  //InitState
  //Actions
  const First_Page = "first";
  const Last_Page = "last";
  const Next_Page = "next";
  const Prev_Page = "prev";
  const Prev2_Page = "prev2";
  const Next2_Page = "next2";
  const Reset_Page = "reset";
  const Load_Page = "load";
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
      case Reset_Page:
        return 1;
      case Load_Page:
        return initState;
      default:
        return state;
    }
  };

  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  const numberPage = parseInt(location.search.slice(5));
  const initState = isNaN(parseFloat(numberPage)) ? 1 : numberPage;
  const [viewMore, setViewMore] = useState([]);
  const [page, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    axios
      .get(
        BaseUrl +
          pathName +
          "/popular" +
          key +
          `&language=en-US&page=${initState}`
      )
      .then((response) => setViewMore(response.data.results))
      .then(() => {
        document.title =
          pathName === "movie" ? "Netflix | MOVIES" : "Netflix | TV SERIES";
      });
  }, [pathName, initState]);

  useEffect(() => {
    dispatch(Reset_Page);
  }, [pathName]);

  window.addEventListener("load", () => {
    dispatch(Load_Page);
  });

  return (
    <div className="viewMore grid wide">
      <h1 className="viewMore-title">
        {pathName === "movie" ? "Movies" : "TV Series"}
      </h1>
      <Item array={viewMore} type={`/${pathName}`} dataSearch={dataSearch} />
      <div className="viewMore-pagination">
        <Link to={`?page1`}>
          <input
            className="viewMore-first"
            type="button"
            onClick={() => {
              dispatch(First_Page);
              window.scroll(0, 0);
            }}
            value="First"
          />
        </Link>
        <Link to={`?page${parseInt(page) - 2}`}>
          <input
            type="button"
            onClick={() => {
              dispatch(Prev2_Page);
              window.scroll(0, 0);
            }}
            value={page >= 3 ? parseInt(page) - 2 : "..."}
          />
        </Link>
        <Link to={`?page${parseInt(page) - 1}`}>
          <input
            type="button"
            onClick={() => {
              dispatch(Prev_Page);
              window.scroll(0, 0);
            }}
            value={page >= 2 ? parseInt(page) - 1 : "..."}
          />
        </Link>
        <input
          onClick={() => window.scroll(0, 0)}
          style={{ backgroundColor: "red" }}
          type="button"
          value={page}
        />
        <Link to={`?page${parseInt(page) + 1}`}>
          <input
            type="button"
            onClick={() => {
              dispatch(Next_Page);
              window.scroll(0, 0);
            }}
            value={page < 300 ? parseInt(page) + 1 : "..."}
          />
        </Link>
        <Link to={`?page${parseInt(page) + 2}`}>
          <input
            type="button"
            onClick={() => {
              dispatch(Next2_Page);
              window.scroll(0, 0);
            }}
            value={page < 299 ? parseInt(page) + 2 : "..."}
          />
        </Link>
        <Link to={`?page300`}>
          <input
            className="viewMore-last"
            type="button"
            onClick={() => {
              dispatch(Last_Page);
              window.scroll(0, 0);
            }}
            value="Last"
          />
        </Link>
      </div>
    </div>
  );
}

export default ViewMore;
