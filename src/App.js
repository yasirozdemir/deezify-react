import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HeaderCustom from "./components/HeaderCustom";
import Homepage from "./components/Homepage";
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
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
