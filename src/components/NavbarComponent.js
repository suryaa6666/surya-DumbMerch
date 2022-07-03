import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const NavbarComponent = () => {

    const navigate = useNavigate();

    const handleComplain = () => {
        navigate('/complain');
    }

    const handleProfile = () => {
        navigate('/profile');
    }

    const handleLogout = () => {
        localStorage.removeItem('userLogin');
        navigate('/');
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="pe-5 ps-5">
            <Navbar.Brand>
                <Link to="/home">
                    <img
                        src="./assets/img/logo.png"
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                        alt="Dumb Merch Logo"
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="d-flex justify-content-end w-100">
                    <Nav.Link onClick={handleComplain} className="mx-2 fw-bold" style={{ color: '#FFF' }}>Complain</Nav.Link>
                    <Nav.Link onClick={handleProfile} className="mx-2 fw-bold" style={{ color: '#FFF' }}>Profile</Nav.Link>
                    <Nav.Link onClick={handleLogout} className="mx-2 fw-bold" style={{ color: '#FFF' }}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent