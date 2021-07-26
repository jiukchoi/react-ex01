import { Container, Main__text } from './Nav.styles'
import { Link } from 'react-router-dom'

const NavUI = () => {
  return (
    <Container>
      <Link to='/' style={{textDecoration: 'none'}}>
        <Main__text>Home</Main__text>
      </Link>
        <Link to='/about' style={{textDecoration: 'none'}}>
        <Main__text>About</Main__text>
      </Link>
    </Container>
  );
}

export default NavUI;
