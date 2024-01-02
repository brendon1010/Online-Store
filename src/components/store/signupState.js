import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    users: [],
    loggedIn: false,
    cart: [],
  },
  reducers: {
    createEmail: (state, action) => {
      state.email = action.payload;
    },
    createPassword: (state, action) => {
      state.password = action.payload;
    },
    createUsername: (state, action) => {
      state.firstName = action.payload;
    },
    createSurname: (state, action) => {
      state.lastName = action.payload;
    },
    createUser: (state) => {
      state.users.push({
        id: state.users.length,
        email: state.email,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
      })
    },
    logIn: (state) => {
      state.loggedIn = true
    },
    logOut: (state) => {
      state.loggedIn = false
    },
    addCart: (state, action) => {
      state.cart.push(action.payload)
    }
  },
});

export const {createEmail, createPassword, createSurname, createUsername, createUser, logIn, logOut, addCart} = signupSlice.actions
export default signupSlice.reducer