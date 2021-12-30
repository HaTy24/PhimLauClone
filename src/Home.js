import React, { useEffect } from "react";
import LNewMovie from "./Components/List/LNewMovie";
import LNewRelease from "./Components/List/LNewRelease";
import LNewTV from "./Components/List/LNewTV";
import ComingUp from "./Components/ComingUp/ComingUp";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Netflix";
    }
  }, [location]);

  return (
    <div className="home">
      <ComingUp />
      <LNewRelease />
      <LNewMovie />
      <LNewTV />
    </div>
  );
}

export default Home;
