import { Card } from "react-bootstrap";

const LabelText = ({
    title = '',
    text=''
}) => {    
    return (<Card.Text> <b>{title}: </b>{ text }</Card.Text>);
}

export default LabelText;