import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFavoriteShowsList, getTdayShowsList, getTopShowsList } from '../api/results/results';
import { setFavoriteShow, setTodayShow, setTopShow } from '../store/actions/show.action';
import { iShow } from '../interfaces/iStateShow';
import ConterntShow from '../components/Shows/ConterntShow/ConterntShow';
import CardShow from '../components/Shows/CardShow/CardShow';

export default function Home() {
  const disparch = useDispatch();
  const {popular,today,top} = useSelector(state => state.showResult);

  useEffect(() => {
    _init();
  },[]);
  const _init = async () => {
    const favRes   = await getFavoriteShowsList().catch();
    const topRes   = await getTopShowsList().catch();
    const todayRes = await getTdayShowsList().catch();

    disparch(setFavoriteShow(favRes));
    disparch(setTopShow(topRes));
    disparch(setTodayShow(todayRes));
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
      {value.data.results
      .map((e: iShow) => <CardShow
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
      />)}
    </ConterntShow>);
}