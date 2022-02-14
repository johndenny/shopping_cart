import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import uniqid from 'uniqid';
import jokapoika from './images/jokapoika.jpg';
import jokapoikaSide from './images/jokapoika-side.jpg';
import kietoaUnikko from './images/kietoa-unikko.jpg';
import kietoaUnikkoSide from './images/kietoa-unikko-side.jpg';
import laulean from './images/laulean-jokeri-papajo.jpg';
import lauleanSide from './images/laulean-jokeri-papajo-side.jpg';
import llolle from './images/llolle-jokeri.jpg';
import llolleSide from './images/llolle-jokeri-side.jpg';
import jokapoikaGreen from './images/jokapoika-shirt-green.jpg';
import jokapoikaGreenSide from './images/jokapoika-shirt-green-side.jpg';
import jokapoikaBlue from './images/jokapoika-shirt-blue.jpg';
import jokapoikaBlueSide from './images/jokapoika-shirt-blue.jpg';
import hallintaUnikkoCoat from './images/hallinta-unikko-coat.jpg';
import hallintaUnikkioCoatSide from './images/hallinta-unikko-coat-side.jpg';
import tirsat from './images/tirsat-unikko-trousers.jpg';
import tirsatSide from './images/tirsat-unikko-trousers-side.jpg';
import otollinen from './images/otollinen-varjatty-unikko.jpg';
import otollinenSide from './images/otollinen-varjatty-unikko-side.jpg';
import Footer from './pages/Footer';


const App = () => {

  const allProducts = [
    {
      id: uniqid(),
      name: 'Jokapoika',
      type: 'Shirt',
      price: 220,
      mainImage: jokapoika,
      sideImage: jokapoikaSide
    },
    {
      id: uniqid(),
      name: 'Keitoa Unikko',
      type: 'Knitted Pullover',
      price: 295,
      mainImage: kietoaUnikko,
      sideImage: kietoaUnikkoSide
    },
    {
      id: uniqid(),
      name: 'Laulaen Jokeri Papajo',
      type: 'Dress',
      price: 400,
      mainImage: laulean,
      sideImage: lauleanSide
    },
    {
      id: uniqid(),
      name: 'llolle Jokeri',
      type: 'Dress',
      price: 395,
      mainImage: llolle,
      sideImage: llolleSide
    },
    {
      id: uniqid(),
      name: 'Jokapoika',
      type: 'Shirt',
      price: 195,
      mainImage: jokapoikaGreen,
      sideImage: jokapoikaGreenSide
    },
    {
      id: uniqid(),
      name: 'Jokapoika',
      type: 'Shirt',
      price: 220,
      mainImage: jokapoikaBlue,
      sideImage: jokapoikaBlueSide
    },
    {
      id: uniqid(),
      name: 'Hallinta Unikko',
      type: 'Coat',
      price: 295,
      mainImage: hallintaUnikkoCoat,
      sideImage: hallintaUnikkioCoatSide
    },
    {
      id: uniqid(),
      name: 'Tirsat Unikko',
      type: 'Coat',
      price: 245,
      mainImage: tirsat,
      sideImage: tirsatSide
    },
    {
      id: uniqid(),
      name: 'Otollinen Varjatty Unikko',
      type: 'Dress',
      price: 225,
      mainImage: otollinen,
      sideImage: otollinenSide
    }
  ]


  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home allProducts={allProducts}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:id' element={<ProductDetail allProducts={allProducts}/>} />          
        </Routes>
        <Footer/>
      </div>    
    </BrowserRouter>
  );
}

export default App;
