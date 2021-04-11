import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.scss';

import Language from './components/Language';
import Navigation from './components/Navigation';
import Cta from './components/Cta';
import Offers from './components/Offers';
import CarouselProducts from './components/carousel/CarouselProducts';
import Products from './components/Products';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className=''>
      <Language />
      <Navigation />
      <Cta />
      <Offers />
      <CarouselProducts />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
