import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Album from "./components/Album";
import Footer from "./components/Footer";
import HeaderCustom from "./components/HeaderCustom";
import Homepage from "./components/Homepage";
import Player from "./components/Player";
import SideBar from "./components/SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderCustom />
        <SideBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/album/:albumID" element={<Album />} />
        </Routes>
        <Footer />
        <Player />
      </div>
    </BrowserRouter>
  );
}

export default App;
