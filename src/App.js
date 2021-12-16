import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import LNewRelease from "./List/LNewRelease";
import Trending from "./ComingUp/ComingUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Trending />
        <LNewRelease />
        <Routes>
          <Route path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
