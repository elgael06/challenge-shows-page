import { useSelector } from 'react-redux';
import { Card, Col } from "react-bootstrap";
import { urlImage } from '../../constants/apiData';

const CreatorsDetailsShow = () => {
    const { selected  } = useSelector(state => state.showResult);
    
    return (
    <Col>
        <b>Creador(es)</b>
        <hr/>
        {selected['created_by'].map(creator =>
            <Card.Img
                key={creator['name']}
                alt={creator['name']}
                title={creator['name']}
                style={{ width: 90,margin:10 }}
                src={creator['profile_path'] ?
                    `${urlImage}${creator['profile_path']}` :
                    'https://profiles.utdallas.edu/img/default.png'}
            />)}
    </Col>
    );
}

export default CreatorsDetailsShow;