
import { Nav } from 'react-bootstrap';

const NavbarAccess = () => {
    
    return (<Nav className="mr-auto">
        <Nav.Link href='/Popular' >Popular</Nav.Link>
        <Nav.Link href='/Top' >Top</Nav.Link>
        <Nav.Link href='/Today' >Today</Nav.Link>
    </Nav>);
}

export default NavbarAccess;