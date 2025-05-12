import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router'

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="border-bottom">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/">Accueil</Nav.Link>
              <Nav.Link as={Link} to="/category/vetements">Vetements</Nav.Link>
              <Nav.Link as={Link} to="/category/chaussures">Chaussures</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
