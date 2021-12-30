import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home";
import Info from "./Components/Info/Info";
import WatchMovie from "./Components/WatchMovie/WatchMovie";
import ViewMore from "./Components/ViewMore/ViewMore";
import Search from "./Components/Search/Search";
import "./App.scss";
import { useState } from "react";

function App() {
  const [dataSearch, setDataSearch] = useState([]);
  const handleSearch = (data) => {
    setDataSearch(data);
  };

  console.log(dataSearch);
  return (
    <BrowserRouter>
      <Header Search={handleSearch} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/:name/:id" element={<Info />} />
          <Route path="/:type/:name/:id/watch" element={<WatchMovie />} />
          <Route path="/:type" element={<ViewMore dataSearch={dataSearch} />} />
          <Route
            path="/:type/:page"
            element={<ViewMore dataSearch={dataSearch} />}
          />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
