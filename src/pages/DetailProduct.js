import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NavbarComponent from "../components/NavbarComponent"
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import data from '../dummyData';

const DetailProduct = () => {

    document.title = 'Detail Product';

    const { id } = useParams();

    const dataDetail = data.find(item => {
        return item.id == id;
    });

    return (
        <>
            <NavbarComponent />
            <Container className="py-5">
                <Row>
                    <Col sm={4}>
                        <img src={`../assets/img/${dataDetail.photo}`} alt="Image cannot be loaded" className='w-100' style={{ maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                    </Col>
                    <Col sm={7}>
                        <h2 className="text-danger fw-bold"> {dataDetail.name} </h2>
                        <div className="text-white">
                            <p>Stock : {dataDetail.stock} </p>
                            <p style={{ height: '250px', maxHeight: '250px', wordWrap: 'break-word', overflow: 'scroll' }}>
                                {dataDetail.description}
                            </p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <h3 className="text-danger fw-bold"> Rp. {dataDetail.price} </h3>
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