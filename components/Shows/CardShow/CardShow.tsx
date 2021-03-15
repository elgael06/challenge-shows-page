
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import CardShowBodyMol from './CardShowBodyMol';
import CardShowPortadaMol from './CardShowPortadaMol';
import CardShowTitleMol from './CardShowTitleMol';
import Link from 'next/link'
const CardShow = ({
    id=0,
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

    return <Card
        style={{ marginTop: 10, width: 210, height: 300 }}
        onPointerOver={handleOver}
        onTouchStart={handleOver}
        onPointerOut={handleOut}
        onTouchEnd={handleOut}
    >
        <Card.Body
            className='background-card-info'
            style={{
                display: show ? '' : 'none',
                zIndex: 999,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgb(0 0  0 / 85%)', color: '#fff'
            }} >
            <CardShowTitleMol
                title={title}
                subtitle={subtitle}
            />
            <CardShowBodyMol
                body={body}
                firstday={firstday}
                country={country}
                popularity={popularity}
                lang={lang}
            />
        </Card.Body>
        <CardShowPortadaMol
            poster={poster}
            title={title}
            votos={votos}
        />
        <span style={{position:'absolute', bottom:-2,right:15,zIndex:999,color:'#FFF'}}><Link href={'/show/'+id} >mas...</Link></span>
    </Card>;
}

export default CardShow;