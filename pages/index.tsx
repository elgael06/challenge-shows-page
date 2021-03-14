import { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
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
    

    const favRes   = await getFavoriteShowsList();
    const topRes   = await getTopShowsList();
    const todayRes = await getTdayShowsList();
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
  poster=''
}) => <Card style={{ marginTop: 5, width: 210, height: 330 }}>
    <Card.Img src={ `${urlImage}${poster}`} alt={title} />
  <Card.Body style={{display:'none'}} >
    <Card.Title>{ `${title.slice(0, 20)} ${title.length > 20 ? '...': ''}` || 'name'}</Card.Title>
      <Card.Subtitle
        className="mb-2 text-muted"
        style={{ height: 20 }}>
        {`${subtitle.slice(0, 13)} ${subtitle.length > 13 ? '...': ''}` || 'original_name'}
      </Card.Subtitle>
      <Card.Text style={{ height: 140, marginTop: 30 }}> {body.slice(0, 100) || 'overview'}</Card.Text>
  </Card.Body>
      <Card.Footer style={{display:'flex',flexDirection:'row'}}>
        <Card.Link href="#">{firstday || 'first_air_date'}</Card.Link>
        <Card.Link href="#">details</Card.Link>
      </Card.Footer>
</Card>;