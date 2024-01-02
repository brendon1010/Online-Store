import { Button, Card, Container, Row, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./store/signupState";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Store() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.signup)
  const navigate = useNavigate()

  const handleClose = () => setShow(false);

  const items = [
    {
      key: 1,
      name: "item1",
      image:
        "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg",
      price: 10,
      description: "product description",
    },
    {
      key: 2,
      name: "item2",
      image:
        "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg",
      price: 320,
      description: "product description",
    },
    {
      key: 3,
      name: "item3",
      image:
        "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg",
      price: 140,
      description: "product description",
    },
    {
      key: 4,
      name: "item4",
      image:
        "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg",
      price: 150,
      description: "product description",
    },
    {
      key: 5,
      name: "item5",
      image:
        "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg",
      price: 100,
      description: "product description",
    },
    {
      key: 6,
      name: "item6",
      image:
        "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg",
      price: 1550,
      description: "product description",
    },
  ];

  return (
    <>
      <Container>
        <Row>
          {items.map((item) => (
            <>
            <Modal show={show} onHide={handleClose} backdrop='static'>
                <Modal.Header closeButton>
                  <Modal.Title>Add to Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>Added To Cart</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>
                </Modal.Footer>
              </Modal>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    style={{ width: "286px" }}
                    variant="top"
                    src={item.image}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description}
                      <hr />R{item.price}
                    </Card.Text>
                    <Button
                      onClick={() => {
                        if(state.loggedIn === false){
                          navigate('/')
                        }else{
                        dispatch(
                          addCart({
                            name: item.name,
                            price: item.price,
                            image: item.image,
                            description: item.description,
                          })
                        );}
                        setShow(true);
                      }}
                      variant="primary"
                    >
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
                <br />
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}
