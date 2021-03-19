import { useSelector } from 'react-redux';
import { Card, Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { urlImage } from "../../constants/apiData";


const PortadaDetalle = () => {
    const { selected  } = useSelector(state => state.showResult);
    return (<Row >
        <Col> {selected ?
            <Card.Img
                src={`${urlImage}${selected['backdrop_path']}`}
                height={240}
            /> :
            <Skeleton height={240} />}
        </Col>
    </Row>);
}

export default PortadaDetalle;