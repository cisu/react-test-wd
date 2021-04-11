import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.scss';

import Language from './components/Language';
import Navigation from './components/Navigation';
import Cta from './components/Cta';
import Offers from './components/Offers';
import CarouselProducts from './components/carousel/CarouselProducts';
// import Carousel from './components/Carousel';

function App() {
  return (
    <div className='App'>
      <Language />
      <Navigation />
      <Cta />
      <Offers />
      <CarouselProducts />
    </div>
  );
}

export default App;
