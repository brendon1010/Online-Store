import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { logIn } from "./store/signupState";

export default function Login() {
  const state = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(logIn());
      navigate("/home");
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "Required";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      if (values.email !== state.email) {
        errors.email = "user does not exist";
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
        <form onSubmit={formik.handleSubmit}>
          <h1>Login</h1>
          <br />
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            id="email"
            type="email"
            placeholder="username@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="myError">{formik.errors.email}</div>
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
        <p className="foot">
          <Link to="/signup">Don't have a account? Sign up here</Link>
        </p>
      </div>
    </div>
  );
}
