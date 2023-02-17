import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HeaderCustom from "./components/HeaderCustom";
import Homepage from "./components/Homepage";
import Player from "./components/Player";
import SideBar from "./components/SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderCustom />
                <SideBar />
                <Homepage />
                <Footer />
                <Player />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
