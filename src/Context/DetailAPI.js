import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl, key } from "../Components/config";

export const LocalState = createContext();

function DetailAPI({ children }) {
  const [comingUp, setComingUp] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [newMovie, setNewMovie] = useState([]);
  const [newTV, setNewTV] = useState([]);

  useEffect(() => {
    axios
      .get(`${BaseUrl}movie/upcoming${key}`)
      .then(function (response) {
        // handle success
        setComingUp(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BaseUrl}movie/now_playing${key}`)
      .then((response) => setNowPlaying(response.data.results));
  }, []);

  useEffect(() => {
    axios
      .get(BaseUrl + "movie/popular" + key)
      .then((response) => setNewMovie(response.data.results));
  }, []);

  useEffect(() => {
    axios
      .get(BaseUrl + "tv/popular" + key)
      .then((response) => setNewTV(response.data.results));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(BaseUrl + `${type}` + key)
  //     .then((response) => setNewRelease(response.data.results.slice(0, 15)));
  // }, [type]);

  const Value = {
    comingUp,
    newMovie,
    newTV,
    nowPlaying,
  };

  return <LocalState.Provider value={Value}>{children}</LocalState.Provider>;
}

export default DetailAPI;
