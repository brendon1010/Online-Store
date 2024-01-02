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
  const [mode, setMode] = useState("white");

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
    if (mode === "white") {
      setMode('black')
      myBody.style.backgroundColor = 'black';
      myBody.style.color = "white";
    }else{
      setMode('white')
      myBody.style.backgroundColor = 'white'
      myBody.style.color = 'black'
    }
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
