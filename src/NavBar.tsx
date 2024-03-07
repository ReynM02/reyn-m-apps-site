import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from './imgs/transparent_icon192.png';

function NavBar() {
  return (
    <Navbar data-bs-theme="dark" className="navBar" sticky="top">
      <Container>
      <Navbar.Brand href="/">
            <img
              alt=""
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            ReynMApps
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown" className="navBar">
              <NavDropdown.Item href="/projects/tip-calculator">Tip Calculator</NavDropdown.Item>
              <NavDropdown.Item href="/projects/catch-the-object">Catch The Object</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className='justify-content-end' href="/privacy">Privacy Policy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;