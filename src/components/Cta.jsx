import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Cta = () => {
  return (
    <section className='cta'>
      <Container className='cta__container'>
        <Row>
          <Col md={12} lg={10} xl={6}>
            <h1 className='cta__heading'>
              ΕΚΤΥΠΩΜΕΝΑ ΠΟΛΛΑΠΛΩΝ ΧΡΗΣΕΩΝ ΠΟΤΗΡΙΑ
            </h1>
            <p className='my-4 cta__content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              pariatur veniam voluptatum fuga, recusandae, eligendi suscipit
              magnam facilis, dolores quisquam aut vitae dicta error! Veniam
              fugit soluta enim adipisci, quas expedita eaque dolor! Aliquam id
              eveniet quas.
            </p>

            <Row className='mt-5 container'>
              <Button
                variant='warning'
                href='/'
                className='cta__btn cta__btn--yellow mt-2'
              >
                ΦΤΙΑΞΕ ΤΟ ΔΙΚΟ ΣΟΥ
              </Button>

              <Button
                href='/'
                variant='outline-light'
                className='cta__btn cta__btn--outline mt-2'
              >
                ΓΙΑ ΕΠΑΓΓΕΛΜΑΤΙΕΣ
              </Button>
            </Row>

            {/* <Row className='mt-5'>
              <Col md={6} lg={5}>
                <Button
                  variant='warning'
                  href='/'
                  className='cta__btn cta__btn--yellow'
                >
                  ΦΤΙΑΞΕ ΤΟ ΔΙΚΟ ΣΟΥ
                </Button>
              </Col>
              <Col md={6} lg={5}>
                <Button
                  href='/'
                  variant='outline-light'
                  className='cta__btn cta__btn--outline'
                >
                  ΓΙΑ ΕΠΑΓΓΕΛΜΑΤΙΕΣ
                </Button>
              </Col>
            </Row> */}
          </Col>

          <Col md={0} lg={2} xl={6}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cta;
