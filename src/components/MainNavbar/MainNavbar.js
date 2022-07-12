import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

function MainNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Speedy Food Delivery</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div>
        // {
        //   arr.name.map(nameItem => (
        //     <Helloworld name={nameItem}/> 
        //   ))
        // }
        // </div>
    );
}

export default MainNavbar;