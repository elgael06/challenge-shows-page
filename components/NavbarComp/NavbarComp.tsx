
import {  Navbar } from 'react-bootstrap';
import CollapseComp from '../CollapseComp/CollapseComp';

const NavbarComp = () => {
    
    return (<Navbar bg="dark" variant="dark" expand="sm" fixed='top' >
      <Navbar.Brand href="/">Shows TV'S</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <CollapseComp />
    </Navbar>);
}


export default NavbarComp;