import Container from 'react-bootstrap/Container';
import NavbarComponent from '../components/NavbarComponent';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const CategoryProduct = () => {

    document.title = 'Category';

    return (
        <>
            <NavbarComponent />
            <Container className="py-5">
                <h3 className="text-white fw-bold"> List Category </h3>
                <Table striped bordered hover variant="dark" className='mt-4'>
                    <thead>
                        <tr>
                            <th className='col-sm-4'>No</th>
                            <th className='col-sm-4'>Category Name</th>
                            <th className='col-sm-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mouse</td>
                            <td>
                                <Row>
                                    <Col md={6}>
                                        <Button variant="success" className="w-100 fw-bold">Edit</Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button variant="danger" className="w-100 fw-bold">Delete</Button>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Keyboard</td>
                            <td>
                                <Row>
                                    <Col md={6}>
                                        <Button variant="success" className="w-100 fw-bold">Edit</Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button variant="danger" className="w-100 fw-bold">Delete</Button>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bag</td>
                            <td>
                                <Row>
                                    <Col md={6}>
                                        <Button variant="success" className="w-100 fw-bold">Edit</Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button variant="danger" className="w-100 fw-bold">Delete</Button>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Stationary</td>
                            <td>
                                <Row>
                                    <Col md={6}>
                                        <Button variant="success" className="w-100 fw-bold">Edit</Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button variant="danger" className="w-100 fw-bold">Delete</Button>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Doll</td>
                            <td>
                                <Row>
                                    <Col md={6}>
                                        <Button variant="success" className="w-100 fw-bold">Edit</Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button variant="danger" className="w-100 fw-bold">Delete</Button>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Pillow</td>
                            <td>
                                <Row>
                                    <Col md={6}>
                                        <Button variant="success" className="w-100 fw-bold">Edit</Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button variant="danger" className="w-100 fw-bold">Delete</Button>
                                    </Col>
                                </Row>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default CategoryProduct