import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.scss';

import Language from './components/Language';
import Navigation from './components/Navigation';
import Cta from './components/Cta';
import Offers from './components/Offers';
import CarouselProducts from './components/carousel/CarouselProducts';
import Products from './components/Products';
import Footer from './components/Footer.jsx';

import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Language />
      <Navigation />
      <Cta />
      <Offers />
      <CarouselProducts />
      <Products />
      <Footer />
    </Router>
  );
}

export default App;
