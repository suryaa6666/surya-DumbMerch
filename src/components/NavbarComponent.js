import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="pe-5 ps-5">
            <Navbar.Brand href="/">
                <img
                    src="./assets/img/logo.png"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="Dumb Merch Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="d-flex justify-content-end w-100">
                    <Nav.Link href="" className="mx-2 fw-bold" style={{ color: '#FFF' }}>Complain</Nav.Link>
                    <Nav.Link href="" className="mx-2 fw-bold" style={{ color: '#FFF' }}>Profile</Nav.Link>
                    <Nav.Link href="" className="mx-2 fw-bold" style={{ color: '#FFF' }}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent