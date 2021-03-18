import { useEffect } from "react";
import { getDetailsShows } from "../../api/details/details";
import BotonFavorito from "../../components/generics/BotonFavorito";


const ShowID = ({ id }) => {
    useEffect(() => {
        init();
    }, []);
    
    const init = async () => {
        
        console.log(`id`, id);
        const data = await getDetailsShows(id).catch();
    }
    
    return (
        <div>
            <h3>Detalles de serie</h3>
            <BotonFavorito
                showId= { id }
            />
        </div>
    );
}
ShowID.getInitialProps = ({ query: { id } }) => {
    return { id }
}

export default ShowID;