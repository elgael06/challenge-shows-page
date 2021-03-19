import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Card, Col, Row } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';

const ImgPortadaDetailsShow = lazy(() => import('./ImgPortadaDetailsShow'));
const CreatorsDetailsShow = lazy(() => import('./CreatorsDetailsShow'));
const ContentDetailsShow = lazy(() => import('./ContentDetailsShow'));
const CompaniesDetailsShow = lazy(() => import('./CompaniesDetailsShow'));


const DetalleSow = () => {
    const { selected  } = useSelector(state => state.showResult);
    
    return (<Row >

        {selected ? <Col>
            <Card style={{marginTop:20 }}>
                <Row>
                    <Suspense fallback={<Skeleton />} > <ImgPortadaDetailsShow /> </Suspense>

                    <Suspense fallback={<Skeleton />}> <ContentDetailsShow /> </Suspense>
                </Row>
                <Row>
                    <Suspense fallback={<Skeleton height={480} />}> <CreatorsDetailsShow /> </Suspense>
                    <hr/>
                </Row>
                <br />                
                <Suspense fallback={<Skeleton height={480} />}> <CompaniesDetailsShow /> </Suspense>
            </Card>
        </Col>
        :<>
            <Col md={4}><Skeleton height={480} /></Col>
            <Col md={8}><Skeleton height={30} count={14} /></Col>
        </>
        }
    </Row>);
}

export default DetalleSow;