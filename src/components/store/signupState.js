import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  //all state to be used globally
  initialState: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
    users: [],
    loggedIn: false,
    cart: [],
    total: 0,
  },
  reducers: {
    createEmail: (state, action) => {
      //reducer to store email
      state.email = action.payload;
    },
    createPassword: (state, action) => {
      //reducer to store password
      state.password = action.payload;
    },
    createName: (state, action) => {
      //reducer to store first name
      state.firstName = action.payload;
    },
    createSurname: (state, action) => {
      //reducer to store surname
      state.lastName = action.payload;
    },
    createUsername: (state, action) => {
      //reducer to store username
      state.username = action.payload;
    },
    createUser: (state) => {
      //reducer to push a new user object to user array
      state.users.push({
        id: state.users.length,
        email: state.email,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
      });
    },
    logIn: (state) => {
      //reducer to change login status to true
      state.loggedIn = true;
    },
    logOut: (state) => {
      //reducer to change login status to false
      state.loggedIn = false;
    },
    addCart: (state, action) => {
      //reducer to push an item/object to the cart array
      state.cart.push(action.payload);
    },
    removeCart: (state, action) => {
      //reducer to remove an item/object from the cart
      state.cart = state.cart.filter((item) => item.name !== action.payload);
    },
    clearCart: (state) => {
      //reducer to clear the entire cart
      state.cart = [];
    },
    updateTotal: (state, action) => {
      //reducer to update the total amount in the cart
      state.total += action.payload;
    },
    subtractTotal: (state, action) => {
      //reducer to subtract from the total in the cart
      state.total -= action.payload;
    },
    changeCart: (state, action) => {
      //reducer to change the shipping and amount for shipping in the cart
      state.cart[action.payload.index].shipping = action.payload.shipMethod;
      if (state.cart[action.payload.index].shipping === "Standard Shipping") {
        state.cart[action.payload.index].shipFee = 20;
      } else if (
        state.cart[action.payload.index].shipping === "Express Shipping"
      ) {
        state.cart[action.payload.index].shipFee = 50;
      } else if (
        state.cart[action.payload.index].shipping === "Two-Day Shipping"
      ) {
        state.cart[action.payload.index].shipFee = 70;
      } else if (
        state.cart[action.payload.index].shipping === "Overnight Shipping"
      ) {
        state.cart[action.payload.index].shipFee = 100;
      }
    },
  },
});

export const {
  createEmail,
  createPassword,
  createSurname,
  createName,
  createUser,
  logIn,
  logOut,
  addCart,
  removeCart,
  updateTotal,
  subtractTotal,
  clearCart,
  changeCart,
  createUsername,
} = signupSlice.actions;
export default signupSlice.reducer;
