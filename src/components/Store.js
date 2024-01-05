import { Button, Card, Container, Row, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCart, updateTotal } from "./store/signupState";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Store() {
  const [show, setShow] = useState(false);  //state to show added to cart alert
  const [count, setCount] = useState(0)  //count to give each object a unique id
  const dispatch = useDispatch();    //dispatch to use reducers
  const state = useSelector((state) => state.signup)   //get initital state object from redux store
  const navigate = useNavigate()   //navigate for redirecting to login page if user isnt logged in

  const handleClose = () => setShow(false);   //close alert

  const items = [   //all products to be used in store
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
            //map items
            <>
            {/*modal to show when product is added to cart*/}
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
              {/*items mapped in cards*/}
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
                        //check if user is logged in
                        if(state.loggedIn === false){
                          navigate('/')
                        }else{
                        dispatch(
                          addCart({
                            name: item.name,
                            price: item.price,
                            image: item.image,
                            description: item.description,
                            shipping: 'Choose Shipment Method',
                            id: count,
                            shipFee: 0,
                          })
                        );
                        dispatch(updateTotal(item.price))
                        setCount(count + 1)
                      }
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
