
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { removeShow, savedShow } from '../../store/actions/show.action';
import { useEffect, useState } from 'react';


const BotonFavorito = ({ showId='' }) => {
    const { saved } = useSelector(state => state.showResult);
    const disparch = useDispatch();
    const [status, setStatus] = useState(false);

    const existe = () => saved.findIndex(value => value == showId) >= 0;

    useEffect(() => {
        const val = existe();
        setStatus(val);
    }, [saved]);
    
    const handleButton = () => disparch( status  ? removeShow(showId): savedShow(showId) );
    
    return (
        <Button
            title='favorito'
            onClick={handleButton}
            variant={status ? 'danger' : 'secondary'}
            size='sm'
        >{status ? 'remover' : 'agregar' }</Button>
    );
}
export default BotonFavorito;