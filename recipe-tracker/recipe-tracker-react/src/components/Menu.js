import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import "../styles/menu.css";


const NavBar=()=>{
    return(
        <>
        <Container> 
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="navbar-container">
            <Navbar.Brand className="nav-title">Recipe Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className="home" ><Link to={"/"} className="home-link">Home</Link></Nav.Link>                    
                    <Nav.Link className="register" ><Link to={"/signup"} className="register-link">Register</Link></Nav.Link>
                    <NavDropdown title="Login" id="basic-nav-dropdown">
                        <NavDropdown.Item className="item"><Link to={"/loginadmin"}>Admin</Link></NavDropdown.Item>
                        <NavDropdown.Item className="item" ><Link to={"/userlogin"}>User</Link></NavDropdown.Item> 
                        <NavDropdown.Divider />             
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Container>

        
        </>

    )
}
export default NavBar