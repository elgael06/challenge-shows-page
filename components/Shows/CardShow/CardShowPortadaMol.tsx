import { Badge, Card } from "react-bootstrap";
import { urlImage } from "../../../constants/apiData";


const CardShowPortadaMol = ({
    poster,
    title,
    votos,
}) => <>
    <Card.Img style={{ height: 'calc(100% - 18px)', width: '100%' }} src={`${urlImage}${poster}`} alt={title} />
    <Badge variant="secondary" style={{marginTop:1}}> Votos { votos }/10</Badge>
</>;

export default CardShowPortadaMol;