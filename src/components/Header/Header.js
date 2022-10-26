import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Image from "react-bootstrap/Image";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fs-5"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-2">
          Web Academy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link></Link>
            <NavLink></NavLink>
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/courses">
              Courses
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faq">
              FAQ
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#memes">
{
  user?.uid ?
  <>
  {user?.photoURL ?
            <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image>
            : <FaUser></FaUser>
            }
            <button onClick={handleLogOut} type="button" className="btn btn-outline-warning ms-2">Log Out</button>
  </>
  :
  <>
  <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
  </>
}

              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
