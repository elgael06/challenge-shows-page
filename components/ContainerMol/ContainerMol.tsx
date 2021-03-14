import { Container } from "react-bootstrap";

//styles 
import styles from './ContainerMol.module.css';

const ContainerMol = ({
    children=null
}) => {
    
    return (<Container className={styles.container_mol} >
        {children}
    </Container>);
}

export default ContainerMol;