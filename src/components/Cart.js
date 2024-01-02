import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Cart() {
  const state = useSelector((state) => state.signup.cart);

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
              <Card>
                <Card.Header>{item.name}</Card.Header>
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
                        {item.description}<br/><br/><br/>
                        R{item.price}
                    </Card.Text>
                  </Card.Body>
                </Card.ImgOverlay>
                <Card.Footer>
                  <Button variant="primary">Complete Order</Button>
                </Card.Footer>
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
    </div>
  );
}
