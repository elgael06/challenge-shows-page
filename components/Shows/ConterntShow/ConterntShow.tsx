import { Col, Row } from "react-bootstrap";

const ConterntShow = ({ children, title }) => <>
    <h4 style={{ color: '#00000070' }}>{title}</h4>
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