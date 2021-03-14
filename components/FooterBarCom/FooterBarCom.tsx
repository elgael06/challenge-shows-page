import { Navbar } from "react-bootstrap";

//style 
import style from './FooterBarCom.module.css';


const FooterBarCom = () => {
    
    return (<Navbar
        bg="light"
        variant="light"
        expand="lg"
        fixed='bottom'
        className={style.footer_bar_com}
    >
        <span>dev by elgael.</span>
    </Navbar>);
}

export default FooterBarCom;