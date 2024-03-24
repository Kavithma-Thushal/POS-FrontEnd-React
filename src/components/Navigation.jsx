import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/images/logo.svg';
import '../assets/styles/style.css';

export default function Navigation() {
    return (
        <Navbar className="bg-dark navbar-dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className='nav-logo' />
                    <span className='nav-brand'>React</span> | POS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/customers">Customers</Nav.Link>
                        <Nav.Link href="/items">Items</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                        <Nav.Link href="/orderdetails">OrderDetails</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
