import React, { useState } from "react";
import { Link } from "react-router-dom";
import jokapoikaBlue from '../images/jokapoika-shirt-blue.jpg';
import jokapoikaBlueSide from '../images/jokapoika-shirt-blue-side.jpg';
import hallintaUnikkoCoat from '../images/hallinta-unikko-coat.jpg';
import hallintaUnikkioCoatSide from '../images/hallinta-unikko-coat-side.jpg';
import tirsat from '../images/tirsat-unikko-trousers.jpg';
import tirsatSide from '../images/tirsat-unikko-trousers-side.jpg';
import otollinen from '../images/otollinen-varjatty-unikko.jpg';
import otollinenSide from '../images/otollinen-varjatty-unikko-side.jpg';

const Home = (props) => {
  const allProducts = [
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

  const [featuredClassName, setFeaturedClassName] = useState(['featured-wrapper']);
  const [leftButtonClassName, setLeftButtonClassName] = useState(['left-button', 'hidden']);
  const [rightButtonClassName, setRightButtonClassName] = useState(['right-button']);

  const rightButtonMove = () => {
    if (featuredClassName.length === 1) {
      setFeaturedClassName(['featured-wrapper', 'left-once']);
      setLeftButtonClassName(['left-button']);
    }
    if (featuredClassName.length === 2) {
      if (featuredClassName[1] === 'left-once') {
        setFeaturedClassName(['featured-wrapper', 'left-twice']);
        setRightButtonClassName(['right-button', 'hidden']);
      }
    }
  }

  const leftButtonMove = () => {
    if (featuredClassName[1] === 'left-once') {
      setFeaturedClassName(['featured-wrapper']);
      setLeftButtonClassName(['left-button', 'hidden']);
    }
    if (featuredClassName[1] === 'left-twice') {
      setFeaturedClassName(['featured-wrapper', 'left-once']);
      setRightButtonClassName(['right-button']);
    }
  }

  return (
    <div className="featured-title-wrapper">
      <div className="featured-title">
        <h1>New Spring Collection</h1>
        <Link to='products'>
          <button className="explore-button">
              Explore Now
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </button>          
        </Link>
      </div>      
      <div className='featured-buttons-wrapper'>
        <div className={featuredClassName.join(' ')}>
          {allProducts.map(product => (
              <div 
                key={product.id}
                className='product-wrapper'
              >
                <Link to={`products/${product.id}`}>              
                <img src={product.mainImage} alt={product.name} />
                <img src={product.sideImage} alt={product.name} />
                </Link>
                <div className="label-wrapper">
                  <span className="product-name">{product.name}</span>
                  <span className="product-type">{product.type}</span>
                  <span className="product-price">${product.price}.00</span>
                </div>  
              </div>            
          ))}
        </div>
        <div className="navigation-arrows">
          <button className={rightButtonClassName.join(' ')} onClick={rightButtonMove}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </button>
          <button className={leftButtonClassName.join(' ')} onClick={leftButtonMove}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          </button>
        </div>              
      </div>      
    </div>

  )
}

export default Home;