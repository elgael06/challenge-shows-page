import { Col, Row } from "react-bootstrap";
import OrderButtonContent from "../CardShow/OrderButtonContent";

const ConterntShow = ({ children, title }) => <>
    <Row>
        <Col sm={9}>
            <h4 style={{ color: '#00000070' }}>{title}</h4>
        </Col>
        <OrderButtonContent />
    </Row>
    <Row >
        <Col style={{
            display: 'flex',
            flexWrap: 'wrap',
            placeContent: 'space-evenly'
        }} md>
            {children}
        </Col>
    </Row>
    <hr />
</>;

export default ConterntShow;