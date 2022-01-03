import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home";
import Info from "./Components/Info/Info";
import WatchMovie from "./Components/WatchMovie/WatchMovie";
import ViewMore from "./Components/ViewMore/ViewMore";
import Search from "./Components/Search/Search";
import "./App.scss";
import Playlist from "./Components/Playlist/Playlist";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/:name/:id" element={<Info />} />
          <Route path="/:type/:name/:id/watch" element={<WatchMovie />} />
          <Route path="/:type" element={<ViewMore />} />
          <Route path="/:type/:page" element={<ViewMore />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
