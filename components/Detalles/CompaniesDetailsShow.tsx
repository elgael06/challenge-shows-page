import { useSelector } from 'react-redux';
import { Card, Col, Row } from "react-bootstrap";
import { urlImage } from '../../constants/apiData';


const CompaniesDetailsShow = () => {
    const { selected  } = useSelector(state => state.showResult);
    
    return (<Row>
        <Col>
            <b>Compañia(s)</b>
            <hr/>
            {selected['production_companies'].map(comp =>
                <Card.Img
                    key={comp['name']}
                    alt={comp['name']}
                    title={comp['name']}
                    style={{ width: 70,margin:5 }}
                    src={comp['logo_path'] ?
                        `${urlImage}${comp['logo_path']}` :
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_None.svg/1280px-Flag_of_None.svg.png'} />)}
        </Col>
    </Row>);
}

export default CompaniesDetailsShow;