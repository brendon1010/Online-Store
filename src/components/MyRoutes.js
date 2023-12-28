import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Store from "./Store";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import User from "./User";

export default function MyRoutes(){
    return(
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/user" element={<User/>}/>
        </Routes>
    )
}