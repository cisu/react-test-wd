import React from 'react';

import LogoWhite from '../assets/images/logo-white.png';
import Navigation from '../assets/images/navigation.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className='footer pb-5'>
      <Container fluid>
        <Row className='py-5'>
          <Col xl={3} lg={12} className='pl-5'>
            <img src={LogoWhite} alt='Logo White' />
            <p className='footer__text mt-5'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              ut, ducimus maxime esse, quasi autem dolor voluptatem quae tempore
              excepturi vel nihil qui neque facilis earum cum nostrum. Quos,
              enim ducimus! Cupiditate?
            </p>
          </Col>
          <Col xl={3} lg={12} className='mt-5 pl-5'>
            ΧΡΗΣΙΜΑ LINKS
            <div className='mt-4 footer__links'>
              <a href='/'>Όροι χρήσης</a>
              <br />
              <a href='/'>Τρόποι Αποστολής</a>
              <br />
              <a href='/'>Τρόποι πληρωμής</a>
              <br />
              <a href='/'>Επικοινωνία</a>
              <br />
            </div>
          </Col>
          <Col xl={6} lg={12} className='mt-5'>
            ΕΠΙΚΟΙΝΩΝΊΑ
            <div className='mt-4  footer__links'>
              <a>New York, NY 10013</a>
              <br />
              <a href='tel:+31555122579'>(315)5512-2579</a>
              <br />
              <a href='mail:etchy@qode.com'>mail:etchy@qode.com</a>
              <br />
            </div>
            <div className='footer__input mt-2 w-50'>
              <input
                type='text'
                placeholder='get weekly newsletters'
                className='mb-2'
              />
              <img
                className='footer__input--navigation'
                src={Navigation}
                alt='Navigation icon'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
