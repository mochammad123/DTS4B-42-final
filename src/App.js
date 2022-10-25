import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/landing_components/home/Home";
import Details from "./components/landing_components/details/Details";
import Login from "./components/landing_components/login/Login";
import Register from "./components/landing_components/register/Register";
import PrivateComponent from "./components/PrivateComponent";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:idNews" element={<Details />} />

          <Route
            exact
            path="/login"
            element={
              <PrivateComponent loginOnly={false}>
                {" "}
                <Login />{" "}
              </PrivateComponent>
            }
          />

          <Route
            exact
            path="/register"
            element={
              <PrivateComponent loginOnly={false}>
                {" "}
                <Register />{" "}
              </PrivateComponent>
            }
          />
          <Route path="/*" exact={true} element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
