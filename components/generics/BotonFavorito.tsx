
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { removeShow, savedShow } from '../../store/actions/show.action';


const BotonFavorito = ({ showId }) => {
    const { saved } = useSelector(state => state.showResult);
    const disparch = useDispatch();
    const existe = () => saved.findIndex(value => value == showId) >= 0 ;
    const handleButton = () => {
        existe()  ?
            disparch(removeShow(showId)) :
            disparch(savedShow(showId));
    }
    return (
        <Button
            title='favorito'
            onClick={handleButton}
            className={existe()  ? 'btn btn-danger' : 'btn btn-primary'}
        >{existe() ? 'remover' : 'agregar'}</Button>
    );
}
export default BotonFavorito;