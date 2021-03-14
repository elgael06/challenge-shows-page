
import { Navbar } from 'react-bootstrap';
import NavbarAccess from '../NavbarComp/NavbarAccess';
import SeachBarMol from '../generics/SeachBarMol';

const CollapseComp = () => {
    
    return (<Navbar.Collapse id="basic-navbar-nav">
        <NavbarAccess />
        <SeachBarMol />
    </Navbar.Collapse>);
}

export default CollapseComp;