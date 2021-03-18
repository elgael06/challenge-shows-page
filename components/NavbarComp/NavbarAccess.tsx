
import { Nav } from 'react-bootstrap';
import Link from 'next/link';

//styles
import styles from './NavbarAccess.module.css';

const accesos = [
    {name:'Popular',link:'/Popular'},
    {name:'Top',link:'/Top'},
    {name:'Today',link:'/Today'},
];
const NavbarAccess = () =>  (<Nav className="mr-auto">
    {accesos.map(e => <Link
        key={e.link}
        href={e.link} >
        <Nav.Item
            className={styles.navbar_access}>
            {e.name}
        </Nav.Item>
    </Link>)}
</Nav>);

export default NavbarAccess;