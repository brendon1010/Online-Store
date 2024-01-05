import { Card, Button, Modal, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCart,
  subtractTotal,
  clearCart,
  changeCart,
} from "./store/signupState";
import { useState } from "react";
import Info from "./Info";

export default function Cart() {
  const state = useSelector((state) => state.signup.cart); //constant to store cart state
  const total = useSelector((state) => state.signup.total); //constant to store total state
  const dispatch = useDispatch(); //dispatch to apply reducers
  const [show, setShow] = useState(false); //state to show purchase alert

  const handleClose = () => {
    //close the purchase alert
    setShow(false);
  };

  return (
    <div>
      {/*check if cart is empty*/}
      {state.length > 0 ? (
        <>
          <br />
          <br />
          <br />
          <Info />
          {state.map((item) => (
            <>
              {/*map items in cart state*/}
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
                <br />
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
                      {/*create dropdown for shipping methods*/}
                      <Dropdown>
                        <Dropdown.Toggle variant="success">
                          {item.shipping}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => {
                              dispatch(
                                changeCart({
                                  index: item.id,
                                  shipMethod: "Standard Shipping",
                                })
                              );
                            }}
                          >
                            Standard Shipping
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              dispatch(
                                changeCart({
                                  index: item.id,
                                  shipMethod: "Express Shipping",
                                })
                              );
                            }}
                          >
                            Express Shipping
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              dispatch(
                                changeCart({
                                  index: item.id,
                                  shipMethod: "Two-Day Shipping",
                                })
                              );
                            }}
                          >
                            Two-Day Shipping
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              dispatch(
                                changeCart({
                                  index: item.id,
                                  shipMethod: "Overnight Shipping",
                                })
                              );
                            }}
                          >
                            Overnight Shipping
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <br />
                      {/*show price and ship fees*/}
                      <h4>R{item.price}</h4>
                      <h6>(ship fees: +R{item.shipFee})</h6>
                    </Card.Text>
                  </Card.Body>

                  <Button
                    variant="success"
                    onClick={() => {
                      dispatch(removeCart(item.name));
                      dispatch(subtractTotal(item.price));
                      setShow(true);
                    }}
                    //button disabled unless shipping method is chosen
                    disabled={
                      item.shipping !== "Choose Shipment Method" ? false : true
                    }
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
          {/*button to complete all items or remove all items*/}
          <Button variant="danger" onClick={() => dispatch(clearCart())}>
            Remove All Orders
          </Button>
          <br />
          <br />
        </>
      ) : (
        <>
          {/*if cart is empty display image*/}
          <img
            src="https://img.freepik.com/premium-vector/nothing-here-flat-illustration_418302-77.jpg?w=360"
            alt="empty"
          />
          <h4 style={{ color: "grey" }}>Cart is currently empty</h4>
        </>
      )}

      {/*purchased alert*/}
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
