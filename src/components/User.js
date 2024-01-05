import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "./store/signupState";
import { useState } from "react";

export default function User() {
  const state = useSelector((state) => state.signup);   //get initial states
  const loginButton = "primary";   //button variant for login
  const logoutButton = "danger";   //button variant for logout
  const navigate = useNavigate();   //navigate to login page
  const dispatch = useDispatch();   //dispatch for reducers
  const [count, setCount] = useState(0);   //count for clicks for dark mode or light mode

  function handleClick() {   //function for when user clicks the login or logout
    if (state.loggedIn) {
      dispatch(logOut());
      navigate("/");
    } else {
      navigate("/");
    }
  }

  function handleDark() {    //function for when the user clciks the dark mode or light mode button
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
      {/*check if user is a guest or is logged in*/}
      <h1>Welcome {state.firstName ? state.firstName : "Guest"}</h1>
      <h4>
        {/*dark mode button*/}
        Dark Mode
        <Button variant="secondary" onClick={handleDark}>
          On
        </Button>
      </h4>
      <br />
      {/*login or logout button*/}
      <Button
        onClick={handleClick}
        variant={state.loggedIn ? logoutButton : loginButton}
      >
        {state.loggedIn ? "Logout" : "Login"}
      </Button>
    </div>
  );
}
