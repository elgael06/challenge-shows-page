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
            <BotonFavorito
                showId= { id }
            />
        </div>
        <Row >
            <Col><Skeleton height={240} /></Col>
        </Row>
        <Row xs={7}>
            <Col xs={2}><Skeleton height={200} /></Col>
            <Col xs={10}>
                <Skeleton height={200}  />
            </Col>
        </Row>
        <Row>
        </Row>
    </>);
}
ShowID.getInitialProps = ({ query: { id } }) => {
    return { id }
}

export default ShowID;