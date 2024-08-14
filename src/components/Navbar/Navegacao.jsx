import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function BasicExample() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Sistema SGM</Navbar.Brand>
          <Nav className="md-auto">
          <Link to={'/login'}
          className='btn btn-sm btn-warning'>
          Acesso Restrito
        </Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default BasicExample;