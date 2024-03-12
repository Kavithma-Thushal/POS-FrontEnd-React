import { Container, Navbar, Nav } from 'react-bootstrap'
import '../assets/styles/style.css';
import logo from '../assets/images/logo.svg';

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className='nav-logo' />
                    <span className='nav-brand'>React</span> | POS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/customer">Customers</Nav.Link>
                        <Nav.Link href="/item">Items</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                        <Nav.Link href="/orderview">OrderDetails</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;