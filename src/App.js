import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
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
import jokapoikaBlueSide from './images/jokapoika-shirt-blue-side.jpg';
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
      id: '12a45',
      name: 'Jokapoika',
      type: 'Shirt',
      price: 220,
      mainImage: jokapoika,
      sideImage: jokapoikaSide
    },
    {
      id: '22b45',
      name: 'Keitoa Unikko',
      type: 'Knitted Pullover',
      price: 295,
      mainImage: kietoaUnikko,
      sideImage: kietoaUnikkoSide
    },
    {
      id: '32c45',
      name: 'Laulaen Jokeri Papajo',
      type: 'Dress',
      price: 400,
      mainImage: laulean,
      sideImage: lauleanSide
    },
    {
      id: '42d45',
      name: 'llolle Jokeri',
      type: 'Dress',
      price: 395,
      mainImage: llolle,
      sideImage: llolleSide
    },
    {
      id: '52f45',
      name: 'Jokapoika',
      type: 'Shirt',
      price: 195,
      mainImage: jokapoikaGreen,
      sideImage: jokapoikaGreenSide
    },
    {
      id: '62g45',
      name: 'Jokapoika',
      type: 'Shirt',
      price: 220,
      mainImage: jokapoikaBlue,
      sideImage: jokapoikaBlueSide
    },
    {
      id: '72h45',
      name: 'Hallinta Unikko',
      type: 'Coat',
      price: 295,
      mainImage: hallintaUnikkoCoat,
      sideImage: hallintaUnikkioCoatSide
    },
    {
      id: '82i45',
      name: 'Tirsat Unikko',
      type: 'Coat',
      price: 245,
      mainImage: tirsat,
      sideImage: tirsatSide
    },
    {
      id: '92j45',
      name: 'Otollinen Varjatty Unikko',
      type: 'Dress',
      price: 225,
      mainImage: otollinen,
      sideImage: otollinenSide
    }
  ];
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedSize, setSelectedSize] = useState('S');
  const [cartArray, setCartArray] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartFade, setCartFade] = useState('');

  const onSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const findProduct = (id) => {
    const index = allProducts.findIndex((item) => item.id === id);
    setSelectedProduct(allProducts[index]);
    return allProducts[index]
  }

  const addToCart = (event) => {
    event.preventDefault();
    const findIndex = cartArray.findIndex((element) => element.id === selectedProduct.id + selectedSize);
    if( findIndex === -1) {
      const newID = {id: selectedProduct.id + selectedSize};
      const productSize = {size: selectedSize};
      const amount = {amount: 1};
      const subTotal = {subTotal: selectedProduct.price * 1};
      setCartArray([...cartArray, {...selectedProduct,...productSize,...amount,...subTotal,...newID}]);
      openCart();
      return      
    }
    const newCartArray = cartArray.map((item) =>
    item.id === (selectedProduct.id + selectedSize) ? {...item, amount: item.amount + 1, subTotal: item.price * (item.amount + 1) } : item);
    setCartArray(newCartArray);
    openCart();
  }

  const addToAmount = (event) => {
    const { id } = event.target;
    const newCartArray = cartArray.map((item) =>
      item.id === id ? {...item, amount: item.amount + 1, subTotal: item.price * (item.amount + 1) } : item);
    setCartArray(newCartArray);
  }

  const minusAmount = (event) => {
    const { id } = event.target;
    const newCartArray = cartArray.map((item) =>
      item.id === id ? {...item, amount: item.amount - 1, subTotal: item.price * (item.amount - 1) } : item);
    setCartArray(newCartArray);
  }

  const removeFromCart = (event) => {
    const { id } = event.target;
    const newArray = cartArray.filter(item => item.id !== id)
    setCartArray(newArray);
  }

  const openCart = () => {
    if (cartOpen === false) {
      setCartOpen(true);
      setCartFade('fade-in');
      return
    }
    setCartFade('fade-out');
  }

  const closeCart = () => {
    if (cartFade === 'fade-in') {
      return
    }
    setCartOpen(false)
  }

  useEffect(() => {
    console.log(cartArray);
  }, [cartArray])

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Navigation openCart={openCart} cartArray={cartArray}/>
        {cartOpen &&
          <React.Fragment>
            <Cart cartFade={cartFade} openCart={openCart} closeCart={closeCart} removeFromCart={removeFromCart} addToAmount={addToAmount} minusAmount={minusAmount} cartArray={cartArray} />
            <div className={`cart-modal ${cartFade}`} onClick={openCart} onAnimationEnd={closeCart}></div>            
          </React.Fragment> 
        }
        <Routes>
          <Route path='/' element={<Home allProducts={allProducts}/>} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products allProducts={allProducts}/>} />
          <Route path='cart' element={<Cart cartArray={cartArray} />} />
          <Route path='products/:id' element={<ProductDetail addToCart={addToCart} findProduct={findProduct} selectedSize={selectedSize} onSizeChange={onSizeChange}/>} />
          <Route path='cart/:id/:size' element={<Cart allProducts={allProducts}/>} />          
        </Routes>
        <Footer/>
      </div>    
    </BrowserRouter>
  );
}

export default App;
