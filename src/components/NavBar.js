import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar(){

    return(
        <Nav fill variant="tabs" style={{padding: '15px', backgroundColor: 'grey', color: 'white', cursor: 'pointer'}}>
            <Nav.Item className="linkItem"><NavLink to='/home'><img className="icon" src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home"/>Home</NavLink></Nav.Item>
            <Nav.Item className="linkItem"><NavLink to='/about'><img className="icon" src="https://icon-library.com/images/about-icon-png/about-icon-png-13.jpg" alt="about"/>About</NavLink></Nav.Item>
            <Nav.Item className="linkItem"><NavLink to='/store'><img className="icon" src="https://pixsector.com/cache/a35c7d7b/avd437689ef3a02914ac1.png" alt="store"/>Store</NavLink></Nav.Item>
            <Nav.Item className="linkItem"><NavLink to='/cart'><img className="icon" src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-512.png" alt="cart"/>Cart</NavLink></Nav.Item>
        </Nav>
    )
}