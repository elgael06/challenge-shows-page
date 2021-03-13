import { Provider } from 'react-redux';
import store from '../store';

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

function MyApp({ Component, pageProps }){
  return <div style={{backgroundColor:'#00000020'}}> <Provider store={store}>
    <Navbar bg="dark" variant="dark" expand="sm" fixed='top' >
      <Navbar.Brand href="">Shows TV'S</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href='/' >Popular</Nav.Link>
        <Nav.Link href='/' >top</Nav.Link>
        <Nav.Link href='/' >today</Nav.Link>
      </Nav>
        <Form inline >          
          <FormControl type="text" placeholder="TV show" className="mr-sm-2" />
          <Button variant="outline-primary mr-sm-2">Buscar</Button>
      </Form>
      </Navbar.Collapse>
      </Navbar>
    <Container style={{display:'flex',position:'relative',padding:'70px 8px',backgroundColor:'#ffffff'}} fluid='lg'>
      <Component {...pageProps} />
    </Container>
      <Navbar bg="light" variant="light" expand="lg" fixed='bottom' style={{justifyContent:'center'}}>
        <span>dev by elgael.</span>
      </Navbar>
  </Provider></div>
}

export default MyApp
