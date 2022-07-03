import Container from 'react-bootstrap/Container';
import NavbarComponent from '../components/NavbarComponent';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const CategoryProduct = () => {
    return (
        <>
            <NavbarComponent />
            <Container style={{ marginTop: '50px', paddingBottom: '50px' }}>
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
                                <Button variant="success" className="pb-2 pt-2 px-5 mx-2 fw-bold">Edit</Button>
                                <Button variant="danger" className="pb-2 pt-2 px-5 mx-2 fw-bold">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Keyboard</td>
                            <td>
                                <Button variant="success" className="pb-2 pt-2 px-5 mx-2 fw-bold">Edit</Button>
                                <Button variant="danger" className="pb-2 pt-2 px-5 mx-2 fw-bold">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bag</td>
                            <td>
                                <Button variant="success" className="pb-2 pt-2 px-5 mx-2 fw-bold">Edit</Button>
                                <Button variant="danger" className="pb-2 pt-2 px-5 mx-2 fw-bold">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Stationary</td>
                            <td>
                                <Button variant="success" className="pb-2 pt-2 px-5 mx-2 fw-bold">Edit</Button>
                                <Button variant="danger" className="pb-2 pt-2 px-5 mx-2 fw-bold">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Doll</td>
                            <td>
                                <Button variant="success" className="pb-2 pt-2 px-5 mx-2 fw-bold">Edit</Button>
                                <Button variant="danger" className="pb-2 pt-2 px-5 mx-2 fw-bold">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Pillow</td>
                            <td>
                                <Button variant="success" className="pb-2 pt-2 px-5 mx-2 fw-bold">Edit</Button>
                                <Button variant="danger" className="pb-2 pt-2 px-5 mx-2 fw-bold">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default CategoryProduct