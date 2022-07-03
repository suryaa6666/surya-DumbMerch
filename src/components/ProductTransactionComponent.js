import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductTransactionComponent = (props) => {

    const getFullDate = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let day = new Date(props.date).getDay();
        day = days[day];
        let date = new Date(props.date).getDate();
        date = date < 10 ? '0' + date : date;
        let month = new Date(props.date).getMonth();
        month = months[month];
        const year = new Date(props.date).getFullYear();
        const fullDate = `${day}, ${date} ${month} ${year}`;
        return fullDate;
    }

    return (
        <Row className="my-3">
            <Col sm={3}>
                <img src={`../assets/img/${props.photo}`} alt="Image cannot be loaded" className='w-100 h-100' style={{ objectFit: 'cover', borderRadius: '10px' }} />
            </Col>
            <Col sm={6} className="text-white">
                <h5 className="text-danger fw-bold">{props.name}</h5>
                <p className="text-danger">
                    {getFullDate()}
                </p>
                <p>
                    Price : Rp. {props.price}
                </p>
                <p className="w-100 fw-bold">
                    Sub Total : Rp. {props.price}
                </p>
            </Col>
            <Col sm={3}>
                <img src='../assets/img/logo.png' className="w-100 h-100" style={{ objectFit: 'contain' }} />
            </Col>
        </Row>
    )
}

export default ProductTransactionComponent