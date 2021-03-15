import {  Navbar } from 'react-bootstrap';
import CollapseComp from '../CollapseComp/CollapseComp';
import Link from 'next/link';

const NavbarComp = () => {
    
    return (<Navbar bg="dark" variant="dark" expand="sm" fixed='top' >
      <Link href='/'> 
        <Navbar.Brand href='/' >Shows TV'S</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <CollapseComp />
    </Navbar>);
}


export default NavbarComp;