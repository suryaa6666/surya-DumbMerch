import { Col, Container, Row, Form, Button, Image } from 'react-bootstrap';
import registerStyle from '../styles/Register.module.css';

const Register = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <Row>
                <Col sm={6} style={{ marginBottom: '30px', marginTop: '100px' }}>
                    <Image src='./assets/img/logo.png' style={{ maxWidth: '200px', maxHeight: '200px', heigt: '100%', width: '100%' }} alt='Image cannot be loaded!' fluid={true} />
                    <div className="mt-4">
                        <h1 className={registerStyle.fontWhiteBold}> Easy, Fast and Reliable </h1>
                        <p style={{ color: '#6A6A6A' }}>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
                    </div>
                    <Row className="mt-5">
                        <Col sm={6}>
                            <Button variant="danger" className="pe-3 ps-3 mx-2">Login</Button>
                            <Button variant="outline-secondary" className="pe-3 ps-3 mx-2">Register</Button>
                        </Col>
                        <Col sm={6}>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6} className="d-flex align-items-center">
                    <Container style={{ backgroundColor: '#191819', padding: '30px', borderRadius: '10px' }}>
                        <h1 className={registerStyle.fontWhiteBold}>Register</h1>
                        <Form className="mt-4">
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Name" style={{ backgroundColor: '#474647' }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Email" style={{ backgroundColor: '#474647' }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Password" style={{ backgroundColor: '#474647' }} />
                            </Form.Group>
                            <Button variant="danger" type="submit" className="w-100 mt-4">
                                Login
                            </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Register