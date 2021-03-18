import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFavoriteShowsList, getTdayShowsList, getTopShowsList } from '../api/results/results';
import { setFavoriteShow, setTodayShow, setTopShow } from '../store/actions/show.action';
import { iShow } from '../interfaces/iStateShow';
import ConterntShow from  '../components/Shows/ConterntShow/ConterntShow';
const CardShow = lazy(() => import('../components/Shows/CardShow/CardShow'));
import {getDetailsShows}  from '../api/details/details';
import ShowLoadingPage from '../components/Shows/CardShow/ShowLoadingPage';

export default function Home() {
  const [listaVer, setVer] = useState([]);
  const disparch = useDispatch();
  const {popular,today,top,saved} = useSelector(state => state.showResult);

  useEffect(() => {
    _init();
  },[]);
  const _init = async () => {
    setTimeout(async () => {
      const favRes = await getFavoriteShowsList().catch();
      const topRes = await getTopShowsList().catch();
      const todayRes = await getTdayShowsList().catch();
      disparch(setFavoriteShow(favRes));
      disparch(setTopShow(topRes));
      disparch(setTodayShow(todayRes));
    }, 1000);
  }
  const obtenerVerDespues = async () => {
    const dataList = [];
    for (let item of saved) {
      const { data } = await getDetailsShows(item);
      dataList.push(data);
    }
    setVer(dataList);
  }
  useEffect(() => {
    obtenerVerDespues();
  },[saved]);

  return [
    { data: {results:listaVer}   , title : `Ver despues ${listaVer.length} `, key:'ver' },
    { data: popular   , title : `Favorites shows `, key:'popular' },
    { data : top      , title : `Popular show `, key:'top' },
    { data : today    , title : `Today shows `, key:'today' }
  ]
    .map((value) => <ConterntShow
      title={value.title}
      key={value.key}
    >
      {value.data?.results?.length ? value.data.results
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
        value.key!='ver' ? <ShowLoadingPage count={3} /> : null}
    </ConterntShow>);
}