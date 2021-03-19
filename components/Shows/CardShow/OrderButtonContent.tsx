import { Button, ButtonGroup, Col } from "react-bootstrap";

const OrderButtonContent = ({
    status      = true,
    handleClickAlfabeto = () => { },
    handleClickVoto     = () => { },
}) => (<Col
    sm={3}
    style={{
        display: 'flex',
        flexDirection: 'row-reverse',
    }}>
    <ButtonGroup>
        <Button
            size='sm'
            onClick={handleClickAlfabeto}
            active={status}
            variant='secondary'> Orden A-Z</Button>
        <Button
            size='sm'
            onClick={handleClickVoto}
            active={!status}
            variant='secondary' > Orden votos</Button>
    </ButtonGroup>
</Col>);

export default OrderButtonContent;