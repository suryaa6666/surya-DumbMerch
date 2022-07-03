import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NavbarComponent from "../components/NavbarComponent"
import Container from 'react-bootstrap/Container';

const DetailProduct = () => {

    document.title = 'Detail Product';

    return (
        <>
            <NavbarComponent />
            <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Row>
                    <Col sm={4}>
                        <img src='./assets/img/product1.png' alt="Image cannot be loaded" className='w-100' style={{ maxHeight: '400px', objectFit: 'cover' }} />
                    </Col>
                    <Col sm={7}>
                        <h2 className="text-danger fw-bold"> Mouse </h2>
                        <div className="text-white">
                            <p>Stock : 600</p>
                            <p>
                                <ul>
                                    <li>Wireless Mouse</li>
                                    <li>Konektivitas wireless 2.4 GHz</li>
                                    <li>Jarak wireless hingga 10 m</li>
                                    <li>Plug and Play</li>
                                    <li>Baterai tahan hingga 12 bulan</li>
                                    <br />
                                    <br />
                                    Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
                                </ul>
                            </p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <h3 className="text-danger fw-bold"> Rp. 300.900 </h3>
                        </div>
                        <div>
                            <Button variant="danger" type="submit" className="w-100 mt-4">
                                Buy
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailProduct