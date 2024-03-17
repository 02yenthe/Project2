import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap"
import { Container, Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AdminPage from "./pages/AdminPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column min-vh-100"> 
      <headers>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand>SupportDesk</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id ="basic-navbar-nav">
              <Nav className= "me-auto w-100 justify-content-end">
                <a href='/admin' className="nav-link" target='_blank'>
                  Admin
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </headers>
      <main>
        <Container className='mt-3'>
          <Routes>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </Container>
      </main>
      <footer className="mt-auto">
        <div className="text-center">Chat App by Nguyen Thanh Nhon And Tran Van Nghi</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
