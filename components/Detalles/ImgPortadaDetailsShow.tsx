import { useSelector } from 'react-redux';
import { Card, Col } from "react-bootstrap";
import { urlImage } from "../../constants/apiData";

const ImgPortadaDetailsShow = () => {
    const { selected  } = useSelector(state => state.showResult);
    
    return (<Col md={4}>
        <Card.Img src={`${urlImage}${selected['poster_path']}`} />
    </Col>);
}

export default ImgPortadaDetailsShow;