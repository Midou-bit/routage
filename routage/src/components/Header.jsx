import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, useMatch } from 'react-router'
import '../assets/styles/header.css'

function Header() {
  const match = useMatch('/category/:categoryId')

  return (
    <header>
      <Navbar bg="light" expand="lg" className="border-bottom">
        <Container>
          {match && (
            <span className="me-3">Catégorie : {match.params.categoryId}</span>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={NavLink} to="/" className="nav-link">
                Accueil
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/vetements" className="nav-link">
                Vetements
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/chaussures" className="nav-link">
                Chaussures
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
