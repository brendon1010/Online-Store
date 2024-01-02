import { Carousel, Card } from "react-bootstrap";
import Store from "./Store";
import About from "./About";

export default function Home() {

  return (
    <div>
      <br/>
    <Carousel id="home" style={{marginTop: '10vh'}}>
      <Carousel.Item style={{backgroundColor: 'black'}}>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="back" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor: 'black'}}>
      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="back" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor: 'black'}}>
      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="back" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <Card>
      <Card.Img className="banner" src="https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg" alt="Card image" />
      <Card.ImgOverlay style={{color: 'white'}}>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <br/>
    <br/>
    <span id="store">
    <Store/>
    </span>
    <br/><hr/>
    <span id="about">
    <About/>
    </span>
    <br/><br/><hr/>
    <footer style={{backgroundColor: 'black', textAlign: 'center', color: 'white'}}>
      <h2>Contact Me</h2>
      <img className="contactMe" src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmail"/>
      <img className="contactMe" src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png" alt="phone"/>
    </footer>
    </div>
  );
}
