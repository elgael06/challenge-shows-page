import { useEffect, useState } from 'react';
import { Badge, Card, Col, Row, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getFavoriteShowsList, getTdayShowsList, getTopShowsList } from '../api/results/results';
import { setFavoriteShow, setTodayShow, setTopShow } from '../store/actions/show.action';
import { iShow } from '../interfaces/iStateShow';
import { urlImage } from '../constants/apiData';


export default function Home() {
  const disparch = useDispatch();
  const {popular,today,top} = useSelector(state => state.showResult);

  useEffect(() => {
    _init();
    console.log(`showResult`, popular);
  },[]);
  const _init = async () => {
    

    const favRes   = await getFavoriteShowsList().catch();
    const topRes   = await getTopShowsList().catch();
    const todayRes = await getTdayShowsList().catch();
    disparch(setFavoriteShow(favRes));
    disparch(setTopShow(topRes));
    disparch(setTodayShow(todayRes));
  }

  return (
    <>
      <ConterntShow title='favorites shows'>
        {popular.results.map((e:iShow) => {
          return <CardShow
            title={e.name}
            subtitle={e.original_name}
            body={e.overview}
            firstday={e.first_air_date}
            poster={e.poster_path}
            key={`pop${e.id}`}
            country={e.origin_country}
            popularity={e.popularity}
            votos={e.vote_average}
            lang={e.original_language}
          />
        })}
      </ConterntShow>
      
      <ConterntShow title='Popular shows'>        
          {top.results.map((e:iShow) => {
          return <CardShow
            title={e.name}
            subtitle={e.original_name}
            body={e.overview}
            firstday={e.first_air_date}
            poster={e.poster_path}
            key={`pop${e.id}`}
            country={e.origin_country}
            popularity={e.popularity}
            votos={e.vote_average}
            lang={e.original_language}
          />
        })}
      </ConterntShow>      

      <ConterntShow title='today shows'>        
          {today.results.map((e:iShow) => {
          return <CardShow
            title={e.name}
            subtitle={e.original_name}
            body={e.overview}
            firstday={e.first_air_date}
            poster={e.poster_path}
            key={`pop${e.id}`}
            country={e.origin_country}
            popularity={e.popularity}
            votos={e.vote_average}
            lang={e.original_language}
          />
        })}
    </ConterntShow>
    </>
  )
}

const ConterntShow = ({ children,title})=><>
      <h4 style={{color:'#00000070'}}>{title}</h4>
    <Row >
      <Col style={{
        display: 'flex',
        flexWrap: 'wrap',
        placeContent: 'space-evenly'
      }}>
        {children}
      </Col>
    </Row>
    <hr/>
  </>

const CardShow = ({
  title = '',
  subtitle = '',
  body = '',
  firstday = '00/00/0000',
  poster = '',
  country=[],
  popularity = 0,
  votos = '',
  lang='',
}) => {
  const [show, setShow] = useState(false);
  const handleOver = () => {
    setShow(true);
  }
  const handleOut = () => {
    setShow(false);
  }
  
  return <Card style={{ marginTop: 10, width: 210, height: 300 }} onPointerOver={handleOver} onPointerOut={handleOut}>
    <Card.Body className='background-card-info' style={{ display: show ? '' : 'none', zIndex: 999, position: 'absolute', top: 0, bottom:0,left:0,right:0,background:'rgb(0 123  255 / 95%)',color:'#fff'}} >
      <Card.Title>{ `${title.slice(0, 20)} ${title.length > 20 ? '...': ''}` || 'name'}</Card.Title>
      <Card.Text
        className="mb-2 text-muted">
        <b style={{color:'#00000095' }}>{`${subtitle.slice(0, 13)} ${subtitle.length > 13 ? '...': ''}` || 'original_name'}</b>
      </Card.Text>
        <Card.Text style={{ height: 95 }}> {`${body.slice(0, 70)} ${body.length > 70 ? '...': ''}` || 'overview'}</Card.Text>
        <Card.Subtitle >Emicion {firstday || 'first_air_date'}</Card.Subtitle>
        <Card.Text >Origen {country || 'NA'} | {lang}</Card.Text>
        <Card.Text >vistas {popularity || 'NA'}</Card.Text>
    </Card.Body>
    <Card.Img style={{ height: 'calc(100% - 18px)', width: '100%' }} src={`${urlImage}${poster}`} alt={title} />
    <Badge variant="primary" style={{marginTop:1}}> Votos { votos}/10</Badge>
  </Card>;
}