import { Button, Card, Container, Row, Col } from "react-bootstrap"

export default function Store(){

    const items = [
        {name: 'item1', image: 'https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg', price: 10, description: 'product description'},
        {name: 'item2', image: 'https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg', price: 320, description: 'product description'},
        {name: 'item3', image: 'https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg', price: 140, description: 'product description'},
        {name: 'item4', image: 'https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg', price: 150, description: 'product description'},
        {name: 'item5', image: 'https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg', price: 100, description: 'product description'},
        {name: 'item6', image: 'https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg', price: 1550, description: 'product description'},
    ]

    return(
        <Container>
            <Row>
            {items.map((item) => (
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{width: '286px'}} variant="top" src={item.image}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.description}<hr/>
                            R{item.price}
                        </Card.Text>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                </Card><br/>
                </Col>
            ))}
            </Row>
        </Container>
    )
}