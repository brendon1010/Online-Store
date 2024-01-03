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
    total: 0,
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
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(item => item.name !== action.payload)
    },
    clearCart: (state) => {
      state.cart = []
    },
    updateTotal: (state, action) => {
      state.total += action.payload
    },
    subtractTotal: (state, action) => {
      state.total -= action.payload
    }
  },
});

export const {createEmail, createPassword, createSurname, createUsername, createUser, logIn, logOut, addCart, removeCart, updateTotal, subtractTotal, clearCart} = signupSlice.actions
export default signupSlice.reducer