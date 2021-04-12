import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Products = () => {
  return (
    <section className='products'>
      <Container fluid>
        <Row>
          <Col xl={6} lg={12} className='products__bg products__bg-1'>
            <div className='products__text'>
              <p className='products__text--title'>Πίνακες σε Καμβά</p>
              <p className='products__text--subtitle'>ΚΑΜΒΑΔΕΣ</p>
            </div>
          </Col>
          <Col xl={6} lg={12} className='products__bg products__bg-2'>
            <div className='products__text'>
              <p className='products__text--title'>
                Αυτοκόλλητα, Αυτοκόλλητες Ταπετσαρίες
              </p>
              <p className='products__text--subtitle'>ΤΑΠΕΤΣΑΡΙΕΣ</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xl={6} lg={12} className='products__bg products__bg-3'>
            <div className='products__text'>
              <p className='products__text--title'>Κούπες, Στυλό, Δώρα</p>
              <p className='products__text--subtitle'>ΑΠΕΥΘΕΙΑΣ ΕΚΤΥΠΩΣΕΙΣ</p>
            </div>
          </Col>

          <Col xl={6} lg={12} className='products__bg products__bg-4'>
            <div className='products__text'>
              <p className='products__text--title'>Μπλύζες, Καπέλα, Αξεσουάρ</p>
              <p className='products__text--subtitle'>ΡΟΥΧΙΣΜΟΣ</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xl={6} lg={12} className='products__bg products__bg-5'>
            <div className='products__text'>
              <p className='products__text--title'>Ποτήρια</p>
              <p className='products__text--subtitle'>ΠΟΚΚΑΠΛΩΝ ΧΡΗΣΕΩΝ</p>
            </div>
          </Col>
          <Col xl={6} lg={12} className='products__bg products__bg-6'>
            <div className='products__text'>
              <p className='products__text--title'>
                Φακέλοι, Φυλλάδια, Ημερολόγια
              </p>
              <p className='products__text--subtitle'>ΕΝΤΥΠΑ</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Products;
