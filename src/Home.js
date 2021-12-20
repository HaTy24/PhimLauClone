import React from "react";
import LNewMovie from "./Components/List/LNewMovie";
import LNewRelease from "./Components/List/LNewRelease";
import LNewTV from "./Components/List/LNewTV";
import ComingUp from "./Components/ComingUp/ComingUp";

function Home() {
  return (
    <div>
      <ComingUp />
      <LNewRelease />
      <LNewMovie />
      <LNewTV />
    </div>
  );
}

export default Home;
