import Container from 'react-bootstrap/Container';
import NavbarComponent from '../components/NavbarComponent';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditCategory = () => {

    document.title = 'Edit Category';

    return (
        <>
            <NavbarComponent />
            <Container style={{ marginTop: '50px', paddingBottom: '50px' }}>
                <h3 className="text-white fw-bold"> Edit Category </h3>
                <Form className="mt-4">
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Product category" style={{ backgroundColor: '#474647' }} />
                    </Form.Group>
                    <Button variant="success" type="submit" className="w-100 mt-4">
                        Save
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default EditCategory