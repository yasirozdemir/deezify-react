import { BrowserRouter } from "react-router-dom";
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
        <HeaderCustom />
        <SideBar />
        <Homepage />
        <Footer />
        <Player />
        {/* <Routes>
          <Route path="/" element={<></>} />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
