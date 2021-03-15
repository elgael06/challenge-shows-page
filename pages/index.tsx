import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFavoriteShowsList, getTdayShowsList, getTopShowsList } from '../api/results/results';
import { setFavoriteShow, setTodayShow, setTopShow } from '../store/actions/show.action';
import { iShow } from '../interfaces/iStateShow';
import ConterntShow from  '../components/Shows/ConterntShow/ConterntShow';
const  CardShow = lazy(()=> import( '../components/Shows/CardShow/CardShow'));
import ShowLoadingPage from '../components/Shows/CardShow/ShowLoadingPage';

export default function Home() {
  const disparch = useDispatch();
  const {popular,today,top} = useSelector(state => state.showResult);

  useEffect(() => {
    _init();
  },[]);
  const _init = async () => {
    setTimeout(async () => { 
      const favRes   = await getFavoriteShowsList().catch();
      const topRes   = await getTopShowsList().catch();
      const todayRes = await getTdayShowsList().catch();
      disparch(setFavoriteShow(favRes));
      disparch(setTopShow(topRes));
      disparch(setTodayShow(todayRes));
    },1000)

  }

  return [
    { data : popular  , title : 'Favorites shows' },
    { data : top      , title : 'Popular shows' },
    { data : today    , title : 'Today shows' }
  ]
    .map((value) => <ConterntShow
      title={value.title}
      key={value.title}
    >
      {value.data.results.length!==0 ? value.data.results
        .map((e: iShow) => <Suspense key= {`${value.title}${e.id}`} fallback={  <ShowLoadingPage  /> }> <CardShow
        id={e.id}
        key        = {`${value.title}${e.id}`}
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
        <>
          <ShowLoadingPage />
          <ShowLoadingPage />
          <ShowLoadingPage />
          <ShowLoadingPage />
          <ShowLoadingPage />
      </>}
    </ConterntShow>);
}