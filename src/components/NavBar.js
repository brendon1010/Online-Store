import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
  <div className="queryNav">
    <Nav
      fill
      variant="tabs"
      className="navBar"
    >
      {/*navigation bar with routes and images*/}
      <Nav.Item>
        <NavLink to="/home">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
            alt="home"
          />
          <span className="linkItem">Home</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/cart">
          <img
            className="icon"
            src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-512.png"
            alt="cart"
          />
          <span className="linkItem">Cart</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/user">
          <img
            className="pPic"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="userImg"
          />
        </NavLink>
      </Nav.Item>
    </Nav>
    </div>
  );
}
