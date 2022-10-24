import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/landing_components/home/Home";
import Details from "./components/landing_components/details/Details";
import Login from "./components/landing_components/login/Login";
import Register from "./components/landing_components/register/Register";

function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:idNews" element={<Details />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
