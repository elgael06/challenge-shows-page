
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { removeShow, savedShow } from '../../store/actions/show.action';


const BotonFavorito = ({ showId }) => {
    const { saved } = useSelector(state => state.showResult);
    const disparch = useDispatch();
    const existe = () => saved.findIndex(value => value == showId) >= 0 ? 'remover' : 'agregar';
    const handleButton = () => {
        existe() == 'agregar' ?
            disparch(savedShow(showId)) :
            disparch(removeShow(showId));
    }
    return (
        <Button
            onClick={handleButton}
            className={existe() == 'agregar' ? 'btn btn-primary' : 'btn btn-danger'}
        >{existe()} Favorito</Button>
    );
}
export default BotonFavorito;