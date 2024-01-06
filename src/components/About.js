import { Card } from "react-bootstrap";

export default function About() {
  return (
    <Card>
      {/*create banner in page to give an about section of the website*/}
      <Card.Img
        style={{ width: "201vh" }}
        src="https://png.pngtree.com/thumb_back/fh260/background/20201028/pngtree-tropical-leaves-natural-shadow-overlay-on-green-wall-background-for-overlay-image_442112.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay style={{ color: "white" }}>
        <Card.Title style={{fontFamily: 'Rubik Glitch', fontSize: '20vh'}}>Card title</Card.Title>
        <Card.Text style={{fontFamily: 'Lobster', fontSize: '6vh' }}>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
