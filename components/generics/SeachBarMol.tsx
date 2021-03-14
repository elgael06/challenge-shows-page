import { Button, Form, FormControl } from 'react-bootstrap';

const SeachBarMol = () => {
    
    return (<Form inline >          
        <FormControl type="text" placeholder="TV show" className="mr-sm-2" />
        <Button variant="outline-primary mr-sm-2">Buscar</Button>
    </Form>);
}

export default SeachBarMol;