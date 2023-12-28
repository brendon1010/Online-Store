import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createEmail, createPassword, createSurname, createUser, createUsername } from "./store/signupState";
import { useFormik } from "formik";

export default function Signup() {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      first: '',
      last: '',
      email: '',
      password: '',
      confirm: '',
    },
    onSubmit: (value) => {
      dispatch(createEmail(value.email))
      dispatch(createPassword(value.password))
      dispatch(createUsername(value.first))
      dispatch(createSurname(value.last))
      dispatch(createUser())
      navigate('/')
    },
    validate: (value) => {
      let errors = {};

      if(!value.first){
        errors.first = "Required"
      }

      if(!value.last){
        errors.last = "Required"
      }

      if(!value.email){
        errors.email = "Required"
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)){
        errors.email = 'Email is Invalid'
      }
      
      if(!value.password){
        errors.password = "Required"
      }

      if(!value.confirm){
        errors.confirm = "Required"
      }else if(value.confirm !== value.password){
        errors.confirm = "Passwords do not match"
      }

      return errors;
    }
  })

  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
      <h1>Signup</h1>
      <br />
      <label htmlFor="first">First Name</label>
      <br />
      <input
        className="inp"
        id="first"
        type="text"
        placeholder="name"
        value={formik.values.first}
        onChange={formik.handleChange}
        maxLength={12}
        pattern='[A-Za-z ]+'
        title="Name cannot contain special characters or numbers"
      />{formik.touched.first && formik.errors.first ? <div className="myError">{formik.errors.first}</div>: null}
      <label htmlFor="last">Last Name</label>
      <br />
      <input
        className="inp"
        id="last"
        type="text"
        placeholder="surname"
        value={formik.values.last}
        onChange={formik.handleChange}
        maxLength={12}
        pattern='[A-Za-z ]+'
        title="Name cannot contain special characters or numbers"
      />{formik.touched.last && formik.errors.last ? <div className="myError">{formik.errors.last}</div>: null}
      <br />
      <br />
      <hr />
      <label htmlFor="email">Email</label>
      <br />
      <input
        className="inp"
        id="email"
        type="email"
        placeholder="username@example.com"
        value={formik.values.email}
        onChange={formik.handleChange}
      />{formik.touched.email && formik.errors.email ? <div className="myError">{formik.errors.email}</div>: null}
      <hr />
      <label htmlFor="password">password</label>
      <input
        className="inp"
        id="password"
        type="password"
        placeholder="********"
        value={formik.values.password}
        onChange={formik.handleChange}
        maxLength={15}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
      />{formik.touched.password && formik.errors.password ? <div className="myError">{formik.errors.password}</div>: null}
      <br />
      <label htmlFor="confirm">Confirm Password</label>
      <input
        className="inp"
        id="confirm"
        type="password"
        placeholder="********"
        value={formik.values.confirm}
        onChange={formik.handleChange}
      />{formik.touched.confirm && formik.errors.confirm ? <div className="myError">{formik.errors.confirm}</div>: null}
      <br />
      <br />
      <Button variant="primary" type="submit">
        Signup
      </Button>
      </form>
      <br />
      <br />
      <p className="foot">
        <Link to="/">Already have a account? Login here</Link>
      </p>
    </div>
  );
}
