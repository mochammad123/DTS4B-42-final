import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/landing_components/home/Home";
import Detail from "./components/landing_components/details/Detail";
import Login from "./components/landing_components/login/Login";
import Register from "./components/landing_components/register/register";



function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
