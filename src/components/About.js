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
        <Card.Title style={{fontFamily: 'Rubik Glitch', fontSize: '20vh'}}>AuraWardrobe</Card.Title>
        <Card.Text style={{fontFamily: 'Lobster', fontSize: '4vh' }}>
          <br/><br/>
        Welcome to AuraWardrobe! We believe that fashion is more than just clothing—it's an expression of individuality and confidence. At AuraWardrobe, we curate stylish collections that empower you to embrace your unique style while enjoying comfort and quality. Our passion for fashion drives us to offer a diverse range of clothing that speaks to every personality and occasion. Step into our world and discover the perfect blend of trendsetting designs and timeless elegance, crafted to elevate your wardrobe. Join us on this style journey as we celebrate authenticity, versatility, and the beauty of self-expression.
        </Card.Text>
        <Card.Text>This is a fictional store<br/>All product images were created using Bing image generator</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
