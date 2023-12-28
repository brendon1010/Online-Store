import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar(){

    return(
        <Nav fill variant="tabs" style={{padding: '15px', backgroundColor: 'grey', color: 'white', cursor: 'pointer'}}>
            <Nav.Item><NavLink to='/home'><img className="icon" src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home"/><span className="linkItem">Home</span></NavLink></Nav.Item>
            <Nav.Item><a href='#about'><img className="icon" src="https://icon-library.com/images/about-icon-png/about-icon-png-13.jpg" alt="about"/><span className="linkItem">About</span></a></Nav.Item>
            <Nav.Item><a href='#store'><img className="icon" src="https://pixsector.com/cache/a35c7d7b/avd437689ef3a02914ac1.png" alt="store"/><span className="linkItem">Store</span></a></Nav.Item>
            <Nav.Item><NavLink to='/cart'><img className="icon" src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-512.png" alt="cart"/><span className="linkItem">Cart</span></NavLink></Nav.Item>
            <Nav.Item><NavLink to='/user'><img className="pPic" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="userImg"/></NavLink></Nav.Item>
        </Nav>
    )
}