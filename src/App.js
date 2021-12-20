import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SingleMovie from "./Components/Single/SingleMovie";
import Home from "./Home";
import Info from "./Components/Info/Info";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/:name/:id" element={<Info />} />
          <Route path="/watch/:id" element={<SingleMovie />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
