import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LandingPage = () => {
  let { isUserLoggedIn } = useSelector((state) => state.user);
  console.log("isUserLoggedIn: ", isUserLoggedIn);
  return (
    <div>
      {isUserLoggedIn ? (
        <Link to="/dashboard">Go to dashboard</Link>
      ) : (
        <Link to="/login">Go to login page</Link>
      )}
    </div>
  );
};

export default LandingPage;
