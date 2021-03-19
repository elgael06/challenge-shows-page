import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getDetailsShows } from "../../api/details/details";
import { addSelected,removeSelected } from "../../store/actions/show.action";
import PortadaDetalle from "../../components/Detalles/PortadaDetalle";
import DetalleSow from "../../components/Detalles/DetalleSow";


const ShowID = ({ id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(removeSelected());
        init();
    }, []);
    
    const init = async () => {
        const { data } = await getDetailsShows(id).catch();
        dispatch(addSelected(data));
    }
    return (<>
        <PortadaDetalle />
        <DetalleSow />
    </>);
}
ShowID.getInitialProps = ({ query: { id } }) => ({ id });

export default ShowID;