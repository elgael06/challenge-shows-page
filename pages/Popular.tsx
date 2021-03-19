import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteShowsList } from "../api/results/results";
import CardShow from "../components/Shows/CardShow/CardShow";
import ShowLoadingPage from "../components/Shows/CardShow/ShowLoadingPage";
import ConterntShow from "../components/Shows/ConterntShow/ConterntShow";
import { iShow } from "../interfaces/iStateShow";
import { setFavoriteShow } from "../store/actions/show.action";


const Populares = () => {
    const disparch = useDispatch();
    const { popular } = useSelector(state => state.showResult);

    useEffect(() => {
        _init();   
    },[]);

    const _init = async () => {
        const favRes = await getFavoriteShowsList().catch();

        disparch(setFavoriteShow(favRes));
    }
    
    return (<ConterntShow
            orden={false}
            title='Lista de Shows populares '
        >
            {
                popular?.results?.length ? popular.results
        .map((e: iShow) => <Suspense key={`${popular.title}${e.id}`} fallback={<ShowLoadingPage />}> <CardShow          
            id={e.id}
            key        = {`${popular.title}${e.id}`}
            title      = {e.name}
            subtitle   = {e.original_name}
            body       = {e.overview}
            firstday   = {e.first_air_date}
            poster     = {e.poster_path}
            country    = {e.origin_country}
            popularity = {e.popularity}
            votos      = {e.vote_average}
            lang       = {e.original_language}
        /></Suspense>) :
        <ShowLoadingPage count={3} />}
    </ConterntShow>);
}

export default Populares;