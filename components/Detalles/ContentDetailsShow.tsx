import { useSelector } from 'react-redux';
import { Card, Col } from "react-bootstrap";
import LabelText from '../generics/LabelText';
import TitleDetalle from './TitleDetalle';

const ContentDetailsShow = () => {
    const { selected  } = useSelector(state => state.showResult);
    
    return (
        <Col md={8}>
            <TitleDetalle id={selected['id']} />
            {[
                {title:'Nombre',text:selected['name']},
                {title:'Pagina',text:<a href={selected['homepage']}>{ selected['homepage']}</a>},
                {title:'Popularidad',text:selected['popularity']},
                {title:'Puntos',text:`${selected['vote_average']}/10`},
                {title:'Episodios',text:selected['number_of_episodes']},
                {title:'Temporadas',text:selected['number_of_seasons']},
                {title:'Estatus',text:`${selected['number_of_seasons'] ? 'en produccion' : 'finalizada'} (${selected['status'] })`},
                {title:'Proximo expisodio',text:selected['next_episode_to_air'] && selected['next_episode_to_air']['air_date']},
                {title:'Generos',text:selected['genres'].map(e =><span style={{padding:2}} key={e.id}>{ e.name}</span>)},
            ].map(val => <LabelText
                key={val.title}
                title={val.title}
                text={val.text}
            />)}
            <hr />
            <b>Descripcion:</b>
            <Col>
                <Card.Text style={{ justifyContent: 'center' }}>{selected['overview']}</Card.Text>
            </Col>
        </Col>
    );
}

export default ContentDetailsShow;