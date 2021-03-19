import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFavoriteShowsList, getTdayShowsList, getTopShowsList } from '../api/results/results';
import { orderAlfabeticoFavoriteShow, orderAlfabeticoTodayShow, orderAlfabeticoTopShow, orderVotosFavoriteShow, orderVotosTodayShow, orderVotosTopShow, setFavoriteShow, setTodayShow, setTopShow } from '../store/actions/show.action';
import { iShow } from '../interfaces/iStateShow';
import ConterntShow from  '../components/Shows/ConterntShow/ConterntShow';
const CardShow = lazy(() => import('../components/Shows/CardShow/CardShow'));
import {getDetailsShows}  from '../api/details/details';
import ShowLoadingPage from '../components/Shows/CardShow/ShowLoadingPage';

const initialStateOrden = {
  favorites: false,
  top: false,
  today:false,
};

export default function Home() {
  const [listaVer, setVer] = useState([]);
  const [orden, setOrden] = useState(initialStateOrden);
  const disparch = useDispatch();
  const {popular,today,top,saved} = useSelector(state => state.showResult);

  useEffect(() => {
    _init();   
  },[]);
  useEffect(() => {
    obtenerVerDespues();
  }, [saved]);
  
  const _init = async () => {
    const favRes = await getFavoriteShowsList().catch();
    const topRes = await getTopShowsList().catch();
    const todayRes = await getTdayShowsList().catch();

    disparch(setFavoriteShow(favRes));
    disparch(setTopShow(topRes));
    disparch(setTodayShow(todayRes));
  }
  const obtenerVerDespues = async () => {
    const dataList = [];
    for (let item of saved) {
      const { data } = await getDetailsShows(item);
      dataList.push(data);
    }
    setVer(dataList);
  }

  const ordenarfavorites = (typo ='abc'||'voto') => {
    setOrden({ ...orden, favorites: typo == 'abc' });
    if (typo == 'abc') {
      disparch(orderAlfabeticoFavoriteShow(popular));
    } else if (typo == 'voto') {
      disparch(orderVotosFavoriteShow(popular));
    }
  }
  const ordenarTop = (typo ='abc'||'voto') => {
    setOrden({ ...orden, top: typo == 'abc' });
    if (typo == 'abc') {
      disparch(orderAlfabeticoTopShow(top));
    } else if (typo == 'voto') {
      disparch(orderVotosTopShow(top));
    }
  }
  const ordenarToday = (typo ='abc'||'voto') => {
    setOrden({ ...orden, today: typo == 'abc' });
    if (typo == 'abc') {
      disparch(orderAlfabeticoTodayShow(popular));
    } else if (typo == 'voto') {
      disparch(orderVotosTodayShow(popular));
    }
  }
  

  return [
    { data: {results:listaVer}   , title : `Ver despues ${listaVer.length} `, key:'ver'},
    { data: popular   , title : `Favorites shows `, key:'popular',orden:orden.favorites,handle:ordenarfavorites  },
    { data : top      , title : `Popular show `, key:'top',orden:orden.top ,handle:ordenarTop },
    { data : today    , title : `Today shows `, key:'today',orden:orden.today,handle:ordenarToday }
  ]
    .map((value) => <ConterntShow
      orden={value.orden}
      title={value.title}
      handle={value.handle}
      key={value.key}
    >
      {value.data?.results?.length ? value.data.results
        .map((e: iShow) => <Suspense key={`${value.title}${e.id}`} fallback={<ShowLoadingPage />}> <CardShow          
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
        value.key!='ver' ? <ShowLoadingPage count={3} /> : null}
    </ConterntShow>);
}