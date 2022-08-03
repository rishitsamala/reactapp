import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';

export default function MainNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Live Crypto Price Chart</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
}