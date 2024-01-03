import { Card, Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, subtractTotal, clearCart } from "./store/signupState";
import { useState } from "react";

export default function Cart() {
  const state = useSelector((state) => state.signup.cart);
  const total = useSelector((state) => state.signup.total);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      {state.length > 0 ? (
        <>
          <br />
          <br />
          <br />
          {state.map((item) => (
            <>
              <br />
              <Card style={{ backgroundColor: "grey", color: "white" }}>
                <Card.Header
                  style={{
                    backgroundColor: "#282c34",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "large",
                  }}
                >
                  {item.name}
                </Card.Header>
                <Card.Img
                  style={{ width: "286px" }}
                  variant="top"
                  src={item.image}
                />
                <Card.ImgOverlay>
                  <Card.Body>
                    <br />
                    <br />
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      {item.description}
                      <hr />
                      <br />
                      <br />R{item.price}
                    </Card.Text>
                  </Card.Body>

                  <Card.Footer>
                    <Button
                      variant="success"
                      onClick={() => {
                        dispatch(removeCart(item.name));
                        dispatch(subtractTotal(item.price));
                        setShow(true);
                      }}
                    >
                      Complete Order
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(subtractTotal(item.price));
                        dispatch(removeCart(item.name));
                      }}
                    >
                      Remove Order
                    </Button>
                  </Card.Footer>
                </Card.ImgOverlay>
              </Card>
              <br />
            </>
          ))}
          <br />
          <hr />
          <h1>Total Cost: R{total}</h1>
          <hr />
          <br />
          <Button
            variant="success"
            onClick={() => {
              dispatch(clearCart());
              setShow(true);
            }}
          >
            Complete All Orders
          </Button>
          <Button variant="danger" onClick={() => dispatch(clearCart())}>
            Remove All Orders
          </Button>
          <br />
          <br />
        </>
      ) : (
        <>
          <img
            src="https://img.freepik.com/premium-vector/nothing-here-flat-illustration_418302-77.jpg?w=360"
            alt="empty"
          />
          <h4 style={{ color: "grey" }}>Cart is currently empty</h4>
        </>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: "black", color: "white" }}>
          Purchased
        </Modal.Header>
        <Modal.Body>Item Purchased!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
