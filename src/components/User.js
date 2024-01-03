import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "./store/signupState";
import { useState } from "react";

export default function User() {
  const state = useSelector((state) => state.signup);
  const loginButton = "primary";
  const logoutButton = "danger";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  function handleClick() {
    if (state.loggedIn) {
      dispatch(logOut());
      navigate("/");
    } else {
      navigate("/");
    }
  }

  function handleDark() {
    let myBody = document.querySelector("body");
    if (count % 2 === 0) {
      myBody.style.backgroundColor = 'black';
      myBody.style.color = "white";
    }else{
      myBody.style.backgroundColor = 'white'
      myBody.style.color = 'black'
    }
    setCount(count + 1)
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>Welcome {state.firstName ? state.firstName : "Guest"}</h1>
      <h4>
        Dark Mode
        <Button variant="secondary" onClick={handleDark}>
          On
        </Button>
      </h4>
      <br />
      <Button
        onClick={handleClick}
        variant={state.loggedIn ? logoutButton : loginButton}
      >
        {state.loggedIn ? "Logout" : "Login"}
      </Button>
    </div>
  );
}
