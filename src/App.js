import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/landing_components/home/Home";
import Details from "./components/landing_components/details/Details";

function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:idNews" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
