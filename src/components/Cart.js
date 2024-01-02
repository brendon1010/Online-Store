import { Card, Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "./store/signupState";
import { useState } from "react";

export default function Cart() {
  const state = useSelector((state) => state.signup.cart);
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
                  style={{ backgroundColor: "#282c34", color: "white", fontWeight: 'bold', fontSize: 'large'}}
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
                        setShow(true);
                      }}
                    >
                      Complete Order
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeCart(item.name))}
                    >
                      Remove Order
                    </Button>
                  </Card.Footer>
                </Card.ImgOverlay>
              </Card>
              <br />
            </>
          ))}
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
        <Modal.Header style={{backgroundColor: 'black', color: 'white'}}>Purchased</Modal.Header>
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
