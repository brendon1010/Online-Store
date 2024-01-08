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
      name: "Grey T-shirt",
      image:
        "https://th.bing.com/th/id/OIG.WK9wokk6cSJHCibvWsJn?pid=ImgGn",
      price: 125,
      description: "Step into the adventure zone with our bold and vibrant tee! Featuring a dynamic design that captures the essence of exploration and a comfortable fit, this shirt is your ticket to style and comfort wherever your journey takes you",
    },
    {
      key: 2,
      name: "White T-shirt",
      image:
        "https://th.bing.com/th/id/OIG.zVshBU2WIvZtB6tDffOj?pid=ImgGn",
      price: 320,
      description: "Elevate your wardrobe with our chic, versatile tee. Crafted for both style and comfort, this shirt boasts a modern design that effortlessly complements any look. Embrace fashion-forward flair with this must-have essential.",
    },
    {
      key: 3,
      name: "Brown T-shirt",
      image:
        "https://th.bing.com/th/id/OIG.fZ6mhVHBcN.oye28hN8t?w=1024&h=1024&rs=1&pid=ImgDetMain",
      price: 140,
      description: "Unleash your inner creativity with our expressive tee. Designed for self-expression, this shirt showcases a unique blend of artistry and comfort. Make a statement and stand out from the crowd in this captivating piece.",
    },
    {
      key: 4,
      name: "Plain Cap",
      image:
        "https://th.bing.com/th/id/OIG.QnBHwJ7OKCcpYz5N0JcN?pid=ImgGn",
      price: 75,
      description: "Top off your style with our versatile cap. Designed for comfort and flair, this sleek accessory effortlessly complements any outfit. Shield yourself from the sun in fashion-forward confidence with this must-have.",
    },
    {
      key: 5,
      name: "Trousers",
      image:
        "https://th.bing.com/th/id/OIG.BScdukivYCUg_WLzhzyJ?w=1024&h=1024&rs=1&pid=ImgDetMain",
      price: 420,
      description: "Experience style and comfort in every step with our impeccably tailored trousers. Effortlessly blending sophistication and ease, these pants redefine versatility. Elevate your wardrobe with a timeless staple designed to suit any occasion with finesse.",
    },
    {
      key: 6,
      name: "Shirt",
      image:
        "https://th.bing.com/th/id/OIG.SAg.3xlZVmkTxtViYBA.?w=1024&h=1024&rs=1&pid=ImgDetMain",
      price: 550,
      description: "Embrace timeless style and comfort in our signature shirt. Meticulously crafted for sophistication, it pairs versatile design with a tailored fit. Elevate your wardrobe effortlessly with this essential piece of fashion.",
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
                    <Card.Title style={{fontWeight: 'bold'}}>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description}
                      <hr /><span style={{fontWeight: 'bold'}}>R{item.price}</span>
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
