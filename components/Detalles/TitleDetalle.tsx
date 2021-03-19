import { Col, Row } from "react-bootstrap";
import BotonFavorito from "../generics/BotonFavorito";


const TitleDetalle = ({ id }) => {
    return (
    <Row>
        <Col xs={6}><h4>Detalles:</h4></Col>
            <Col xs={6} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <BotonFavorito showId={id} />
        </Col>
    </Row>);
}

export default TitleDetalle;