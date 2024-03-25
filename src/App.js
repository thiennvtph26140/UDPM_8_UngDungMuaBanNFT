import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListNFT from "./ListNFT";
import Detail from "./Detail";
import Home from "./Admin/Home";
import Introduce from "./Admin/Introduce";
import { Header } from "./Header";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/listNft" element={<ListNFT />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
