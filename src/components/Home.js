import { Carousel, Card } from "react-bootstrap";
import Store from "./Store";
import About from "./About";

export default function Home() {
  return (
    <div>
      <br />
      {/*create carousel to display top items*/}
      <Carousel id="home" style={{ marginTop: "10vh" }}>
        <Carousel.Item style={{ backgroundColor: "black" }}>
          <img
            style={{width: '110vh', height: '70vh'}}
            src="https://th.bing.com/th/id/OIG.Q8FElngjSsrapFmIiqvZ?pid=ImgGn"
            alt="back"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: "black" }}>
          <img
            style={{width: '110vh', height: '70vh'}}
            src="https://th.bing.com/th/id/OIG.WZgoXv9CX7AmQ.Y3gFji?pid=ImgGn"
            alt="back"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: "black" }}>
          <img
            style={{width: '110vh', height: '70vh'}}
            src="https://th.bing.com/th/id/OIG.wkulLvcxeZDEAL4JHDm3?pid=ImgGn"
            alt="back"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
          <Card.Title style={{fontFamily: 'Creepster', fontSize: '15vh', margin: '20vh'}}><span style={{color: 'red'}}>Christmas</span> <span style={{color: 'green'}}>Sale!</span></Card.Title>
          <Card.Text style={{fontSize: '5vh'}}>
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
        <h2 style={{fontFamily: 'salsa'}}>Contact Me</h2>
        <img
          className="contactMe"
          src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
          alt="gmail"
        />
        <img
          className="contactMe"
          src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png"
          alt="phone"
        />
      </footer>
    </div>
  );
}
