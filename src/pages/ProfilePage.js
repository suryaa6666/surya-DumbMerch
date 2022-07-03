import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NavbarComponent from "../components/NavbarComponent"

const ProfilePage = () => {

    document.title = 'My Profile';

    return (
        <>
            <NavbarComponent />
            <Container className="py-5">
                <h3 className="text-danger fw-bold"> My Profile </h3>
                <Row>
                    <Col sm={6}>
                        <Row>
                            <Col sm={6}>
                                <img src='./assets/img/myprofile.jpg' alt="Image cannot be loaded" className='w-100' style={{ maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                            </Col>
                            <Col sm={6}>
                                <div>
                                    <h4 className="text-danger fw-bold">Name</h4>
                                    <p className="text-white">Surya</p>
                                </div>
                                <div>
                                    <h4 className="text-danger fw-bold">Email</h4>
                                    <p className="text-white">suryahalo@gmail.com</p>
                                </div>
                                <div>
                                    <h4 className="text-danger fw-bold">Phone</h4>
                                    <p className="text-white">089514043621</p>
                                </div>
                                <div>
                                    <h4 className="text-danger fw-bold">Gender</h4>
                                    <p className="text-white">Male</p>
                                </div>
                                <div>
                                    <h4 className="text-danger fw-bold">Address</h4>
                                    <p className="text-white">Jln. PC Kentang Kelurahan Plis Beliin yang Baru</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6}>
                        <h3 className="text-danger fw-bold"> My Transaction </h3>
                        <div className="w-100" style={{ backgroundColor: '#303031', padding: '20px' }}>
                            <Row>
                                <Col sm={3}>
                                    <img src='./assets/img/product1.png' alt="Image cannot be loaded" className='w-100 h-100' style={{ objectFit: 'cover' }} />
                                </Col>
                                <Col sm={6} className="text-white">
                                    <h5 className="text-danger fw-bold">Mouse</h5>
                                    <p className="text-danger">
                                        <b>Saturday</b>, 03 Juli 2022
                                    </p>
                                    <p>
                                        Price : Rp. 500.000
                                    </p>
                                    <p className="w-100 fw-bold">
                                        Sub Total : Rp. 500.000
                                    </p>
                                </Col>
                                <Col sm={3}>
                                    <img src='./assets/img/logo.png' className="w-100 h-100" style={{ objectFit: 'contain' }} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProfilePage