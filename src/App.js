import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/landing_components/home/Home";
import Detail from "./components/landing_components/details/Detail";


function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
