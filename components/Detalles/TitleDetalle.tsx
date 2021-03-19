import { Col, Row } from "react-bootstrap";
import BotonFavorito from "../generics/BotonFavorito";


const TitleDetalle = ({ id }) => {
    return (
    <Row>
        <Col xs={8}><h3>Detalles de serie</h3></Col>
            <Col xs={4} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <BotonFavorito showId={id} />
        </Col>
    </Row>);
}

export default TitleDetalle;