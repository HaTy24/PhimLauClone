import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home";
import Info from "./Components/Info/Info";
import WatchMovie from "./Components/WatchMovie/WatchMovie";
import ViewMore from "./Components/ViewMore/ViewMore";

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
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
