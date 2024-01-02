import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "./store/signupState";

export default function User() {
  const state = useSelector((state) => state.signup);
  const loginButton = "primary";
  const logoutButton = "danger";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    if (state.loggedIn) {
      dispatch(logOut());
      navigate("/");
    } else {
      navigate("/");
    }
  }

  return (
    <div>
      <br/><br/><br/><br/>
      <h1>Welcome {state.firstName ? state.firstName : "Guest"}</h1>
      <Button
        onClick={handleClick}
        variant={state.loggedIn ? logoutButton : loginButton}
      >
        {state.loggedIn ? "Logout" : "Login"}
      </Button>
    </div>
  );
}
