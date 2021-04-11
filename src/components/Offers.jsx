import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import YellowBgImg from '../assets/images/yellow-Print Shop.png';
import Product from '../assets/images/image.jpg';

const Offers = () => {
  return (
    <section className='offers'>
      <img
        src={YellowBgImg}
        className='offers__bg-img img-fluid'
        alt='yellow'
      />
      <Container className='container offers__container'>
        <Row>
          <Col md={12} lg={12} xl={6}>
            <h1 className='offers__heading'>
              ΜΟΝΑΔΙΚΑ ΠΡΟΪΟΝΤΑ ΣΕ ΕΚΠΛΗΚΤΙΚΕΣ ΤΙΜΕΣ
            </h1>
            <Row className='container'>
              <Button
                href='/'
                variant='outline-dark'
                className='offers__btn offers__btn--outline'
              >
                ΠΡΟΣΦΟΡΕΣ
              </Button>
            </Row>
          </Col>
          <Col md={12} lg={12} xl={6}>
            <img
              src={Product}
              className='img-fluid offers__product_image'
              alt=''
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Offers;
