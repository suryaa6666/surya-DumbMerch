import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ProductCardComponent = (props) => {
    return (
        <Card style={{ width: '15rem', border: 'none', marginTop: '20px', marginBottom: '20px', backgroundColor: '#202021' }}>
            <Card.Img variant="top" src={props.imagesrc} alt="Product image" style={{ maxHeight: '300px' }} />
            <Card.Body style={{ backgroundColor: '#202021', borderRadius: '10px' }}>
                <Card.Title className="fw-bold"> <Link to='/detail' className="text-decoration-none text-danger"> {props.title} </Link> </Card.Title>
                <Card.Text className="text-white">
                    Rp. {props.price}
                </Card.Text>
                <Card.Text className="text-white">
                    Stock : {props.stock}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductCardComponent