import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { getDetailsShows } from "../../api/details/details";
import BotonFavorito from "../../components/generics/BotonFavorito";


const ShowID = ({ id }) => {
    useEffect(() => {
        init();
    }, []);
    
    const init = async () => {
        
        console.log(`id`, id);
        const data = await getDetailsShows(id).catch();
    }
    
    return (<>
        <div>
            <h3>Detalles de serie</h3>
            <BotonFavorito showId= { id } />
        </div>
        <Row >
            <Col><Skeleton height={240} /></Col>
        </Row>
        <Row >
            <Col xs={4}><Skeleton height={480} /></Col>
            <Col xs={8}><Skeleton height={30} count={14} /></Col>
        </Row>
        <Row>
            <Col ><Skeleton height={90} /></Col>
        </Row>
    </>);
}
ShowID.getInitialProps = ({ query: { id } }) => {
    return { id }
}

export default ShowID;