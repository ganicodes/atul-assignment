import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from "./components/landing-page/LandingPage";
import Login from "./components/login/Login";

function App() {
  let { isUserLoggedIn } = useSelector((state) => state.user);
  console.log("isUserLoggedIn: ", isUserLoggedIn);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            exact
            path="/login"
            element={!isUserLoggedIn ? <Login /> : <Navigate to="/dashboard" />}
          />
          <Route
            exact
            path="/dashboard"
            element={isUserLoggedIn ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
