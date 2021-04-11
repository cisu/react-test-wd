import React from 'react';

import Www from '../assets/images/worldwide.png';
import Line from '../assets/images/h1-top-header-line-img-1.jpg';

import Container from 'react-bootstrap/Container';

const Language = () => {
  return (
    <div>
      {/* <div className='container-fluid language--bg'> */}
      <Container fluid className='language--bg'>
        {/* <div className='container'> */}
        <Container>
          <img src={Www} width='19px' alt='' />
          <span className='text-white pl-2 align-middle'>Ελληνικά</span>
        </Container>
        {/* </div> */}
        <img src={Line} className='img-fluid language__line' alt='' />
      </Container>

      {/* </div> */}
    </div>
  );
};

export default Language;
