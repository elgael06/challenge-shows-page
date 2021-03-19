import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteShowsList, getTdayShowsList } from "../api/results/results";
import CardShow from "../components/Shows/CardShow/CardShow";
import ShowLoadingPage from "../components/Shows/CardShow/ShowLoadingPage";
import ConterntShow from "../components/Shows/ConterntShow/ConterntShow";
import { iShow } from "../interfaces/iStateShow";
import { setTodayShow } from "../store/actions/show.action";


const Todays = () => {
    const disparch = useDispatch();
    const { today } = useSelector(state => state.showResult);

    useEffect(() => {
        _init();   
    },[]);

    const _init = async () => {
        const favRes = await getTdayShowsList().catch();

        disparch(setTodayShow(favRes));
    }
    
    return (<ConterntShow
            orden={false}
            title='Lista de Shows del dia'
        >
            {
                today?.results?.length ? today.results
        .map((e: iShow) => <Suspense key={`${today.title}${e.id}`} fallback={<ShowLoadingPage />}> <CardShow          
            id={e.id}
            key        = {`${today.title}${e.id}`}
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

export default Todays;