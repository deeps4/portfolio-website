import { useLocation } from "react-router-dom";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import appLogo from '../images/app-logo.png';

const Header = () => {
  const location = useLocation();

  const navs = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Work', link: '/work' },
    { label: 'Contact', link: '/contact' },
  ]

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <Image
            className="app-logo"
            width={70}
            height={70}
            roundedCircle
            src={appLogo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav activeKey={location.pathname}>
            {navs.map(({ label, link }) => (<Nav.Link key={label} href={link} activeStyle={{ color: 'green' }}>
              {label}</Nav.Link>))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;