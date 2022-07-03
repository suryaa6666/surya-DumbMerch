import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavbarComponent from "../components/NavbarComponent"
import Container from 'react-bootstrap/Container';
import ProductCardComponent from "../components/ProductCardComponent";

const HomePage = () => {

    document.title = 'Home';

    return (
        <>
            <NavbarComponent />
            <Container className="py-5">
                <h3 className="text-danger fw-bold"> Product </h3>
                <Row>
                    <Col sm={3}>
                        <ProductCardComponent title="Mouse" price="500.000" stock="600" imagesrc="./assets/img/product1.png" />
                    </Col>
                    <Col sm={3}>
                        <ProductCardComponent title="Keyboard" price="700.000" stock="600" imagesrc="./assets/img/product2.png" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage