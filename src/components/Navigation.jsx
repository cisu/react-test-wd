import React from 'react';

import LogoBlack from '../assets/images/logo-black.png';

import Magnifying from '../assets/images/magnifying-glass.png';
import User2 from '../assets/images/user2.png';
import ShoppingCarrt from '../assets/images/shopping-carrt.png';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <header className='header'>
      {/* <Navbar bg='dark' expand='xl' variant='dark'> */}
      <Navbar expand='xl' className='header__navbar container'>
        <Navbar.Brand href='#home' className='header__logo'>
          <img src={LogoBlack} className='img-fluid' alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link className='header__link' href='#dora'>
              ΔΩΡΑ
            </Nav.Link>
            <Nav.Link className='header__link' href='#ektiposeis'>
              ΕΚΤΥΠΩΣΕΙΣ ΕΝΔΥΜΑΤΩΝ
            </Nav.Link>
            <Nav.Link className='header__link' href='#autokollhta'>
              ΑΥΤΟΚΟΛΛΗΤΑ
            </Nav.Link>
            <Nav.Link className='header__link' href='#kambades'>
              ΚΑΜΒΑΔΕΣ
            </Nav.Link>
            <Nav.Link className='header__link' href='#kenthmata'>
              ΚΕΝΤΗΜΑΤΑ ΕΝΔΥΜΑΤΩΝ
            </Nav.Link>
            <Nav.Link className='header__link' href='#offset'>
              OFFSET ΕΚΤΥΠΩΣΕΙΣ
            </Nav.Link>
          </Nav>
          <div className='d-flex justify-content-center mt-2 header__icons'>
            {/* <FormControl type='text' placeholder='Search' className='mr-sm-2' /> */}
            {/* <Button variant='outline-success'>Search</Button> */}
            <Link to='/search'>
              <img src={Magnifying} className='header__icon ' alt='search' />
            </Link>
            <Link to='/profile'>
              <img src={User2} className='header__icon mx-4' alt='profile' />
            </Link>
            <Link to='/cart'>
              <img src={ShoppingCarrt} className='header__icon' alt='cart' />
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
