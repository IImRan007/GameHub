import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Header from "./components/Header";
import GameDetails from "./pages/GameDetails";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:gameId" element={<GameDetails />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
