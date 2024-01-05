import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { logIn } from "./store/signupState";

export default function Login() {
  const state = useSelector((state) => state.signup); //constant to store all states in store

  const dispatch = useDispatch(); //dispatch for reducers

  const navigate = useNavigate(); //navigate to switch pages on succssful login

  const formik = useFormik({
    //formik to handle form
    initialValues: {
      //username and password as values for formik to update
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      //on successful submission change loggedIn state to true in global store and navigate to home page
      dispatch(logIn());
      navigate("/home");
    },
    validate: (values) => {
      //error handlings
      let errors = {};

      if (!values.username) {
        errors.username = "Required";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      if (values.username !== state.username) {
        //check if username and password match with the values stored in signup
        errors.username = "user does not exist";
      } else if (values.password !== state.password) {
        errors.password = "Password is incorrect";
      }

      return errors;
    },
  });

  return (
    <div>
      <br />
      <br />
      <div className="login">
        {/*form created for login*/}
        <form onSubmit={formik.handleSubmit}>
          <h1>Login</h1>
          <br />
          <label htmlFor="username">Username</label>
          <br />
          <input
            id="username"
            type="text"
            placeholder="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="myError">{formik.errors.username}</div>
          ) : null}
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            type="password"
            placeholder="**********"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="myError">{formik.errors.password}</div>
          ) : null}
          <br />
          <br />
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
        <br />
        <br />
        {/*link text to redirect to signup page*/}
        <p className="foot">
          <Link to="/signup">Don't have a account? Sign up here</Link>
        </p>
      </div>
    </div>
  );
}
