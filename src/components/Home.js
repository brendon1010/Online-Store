import { Carousel, Card } from "react-bootstrap";
import Store from "./Store";
import About from "./About";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false); //state to show phone nnumber
  const [count, setCount] = useState(0); //state to handle click count on phone icon
  return (
    <div>
      <br />
      {/*create carousel to display top items*/}
      <Carousel id="home" style={{ marginTop: "10vh" }}>
        <Carousel.Item style={{ backgroundColor: "black" }}>
          <img
            style={{ width: "110vh", height: "70vh" }}
            src="https://th.bing.com/th/id/OIG.Q8FElngjSsrapFmIiqvZ?pid=ImgGn"
            alt="back"
          />
          <Carousel.Caption style={{fontWeight: 'bold'}}>
            <h3>T-SHIRTS</h3>
            <p>Custom T-shirts or styled T-shirts available</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: "black" }}>
          <img
            style={{ width: "110vh", height: "70vh" }}
            src="https://th.bing.com/th/id/OIG.WZgoXv9CX7AmQ.Y3gFji?pid=ImgGn"
            alt="back"
          />
          <Carousel.Caption style={{fontWeight: 'bold'}}>
            <h3>TROUSERS</h3>
            <p>Jeans, chinos, Cargo, get any type of trouser, all available here!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: "black" }}>
          <img
            style={{ width: "110vh", height: "70vh" }}
            src="https://th.bing.com/th/id/OIG.wkulLvcxeZDEAL4JHDm3?pid=ImgGn"
            alt="back"
          />
          <Carousel.Caption style={{fontWeight: 'bold'}}>
            <h3>SHIRTS</h3>
            <p>
              The most modern and stylish shirts out there!!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      {/*create card for showing baneer for advertisement*/}
      <Card>
        <Card.Img
          className="banner"
          src="https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay style={{ color: "white" }}>
          <Card.Title
            style={{
              fontFamily: "Creepster",
              fontSize: "15vh",
              margin: "20vh",
            }}
          >
            <span style={{ color: "red" }}>Christmas</span>{" "}
            <span style={{ color: "green" }}>Sale!</span>
          </Card.Title>
          <Card.Text style={{ fontSize: "5vh" }}>
            Get up to 40% off on selected products!
          </Card.Text>
          <Card.Text>Unfortunately this sale has already ended</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br />
      <br />
      <span id="store">
        {/*store component for showing store items*/}
        <Store />
      </span>
      <br />
      <hr />
      <span id="about">
        {/*about component for showing about section*/}
        <About />
      </span>
      <br />
      <br />
      <hr />
      {/*footer for contact section*/}
      <footer
        style={{
          backgroundColor: "black",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontFamily: "salsa" }}>Contact Me</h2>
        <a href="mailto: brendonpillay03@gmail.com">
          <img
            className="contactMe"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="gmail"
          />
        </a>
        <img
          className="contactMe"
          src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png"
          alt="phone"
          onClick={() => {
            if (count % 2 === 0) {
              setShow(true);
            } else {
              setShow(false);
            }
            setCount(count + 1);
          }}
        />
        {show && <p>071 347 2385</p>}
      </footer>
    </div>
  );
}
