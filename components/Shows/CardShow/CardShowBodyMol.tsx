import { Card } from "react-bootstrap";


const CardShowBodyMol = ({
    body = '',
    firstday = '00/00/0000',
    country=[],
    popularity = 0,
    lang='',
}) => <>
    <Card.Text style={{ height: 95 }}> {`${body.slice(0, 70)} ${body.length > 70 ? '...': ''}` || 'overview'}</Card.Text>
    <Card.Subtitle >Emicion {firstday || 'first_air_date'}</Card.Subtitle>
    <Card.Text >Origen {country || 'NA'} | {lang}</Card.Text>
    <Card.Text >vistas {popularity || 'NA'}</Card.Text>

</>;

export default CardShowBodyMol;