import { Col, Row } from "react-bootstrap";
import BotonFavorito from "../generics/BotonFavorito";


const TitleDetalle = ({ id }) => {
    return (
    <Row>
        <Col xs={8}><h4>Detalles de serie</h4></Col>
            <Col xs={4} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <BotonFavorito showId={id} />
        </Col>
    </Row>);
}

export default TitleDetalle;