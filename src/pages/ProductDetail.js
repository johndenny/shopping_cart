import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const { id } = useParams();
  const { findProduct, addToCart, selectedSize, onSizeChange } = props;
  const [product, setProduct] = useState([])
  const [firstImageClass, setFirstImageClass] = useState(['first-image', 'selected']);
  const [secondImageClass, setSecondImageClass] = useState(['second-image']);
  const [firstMainImageClass, setFirstMainImageClass] = useState(['first-main-image', 'selected']);
  const [secondMainImageClass, setSecondMainImageClass] = useState(['second-main-image', 'selected']);

  const imageSwitch = () => {
    if (firstImageClass.length === 1) {
      setFirstMainImageClass(['first-main-image', 'selected']);
      setSecondImageClass(['second-image']);
      setFirstImageClass(['first-image', 'selected']);
      return
    }
    setFirstMainImageClass(['first-main-image']);
    setFirstImageClass(['first-image']);
    setSecondImageClass(['second-image', 'selected']);
  }

  useEffect(() => {
    setProduct(findProduct(id));
  }, []);

  return (

      <div key={product.id} className='product-detail-wrapper'>
        <div className="images-sidebar">
          <img className={firstImageClass.join(' ')} src={product.mainImage} alt={product.name} onClick={imageSwitch}/>
          <img className={secondImageClass.join(' ')} src={product.sideImage} alt={product.name} onClick={imageSwitch}/>            
        </div>
        <div className="main-images">
          <img className={firstMainImageClass.join(' ')} src={product.mainImage} alt={product.name} />
          <img className={secondMainImageClass.join(' ')} src={product.sideImage} alt={product.name} />        
        </div>             
        <div className="label">
          <div className="label-header">
            <span className="product-name-wrapper">
              <span className="product-name">
                {product.name}
              </span>
              <span className="product-type">
                {product.type}
              </span>                            
            </span>
            <span className="product-price">
              ${product.price}.00
            </span>
          </div>
            <form>
              <div className="size-buttons-wrapper">
                <label htmlFor='small' className="button-wrapper">
                <span className="button-label">small</span>
                  <input 
                    type='radio' 
                    id='small' 
                    name="size"
                    value='S'
                    checked={selectedSize === 'S'}
                    onChange={onSizeChange} 
                  />
                  <span className="button" id="small-button"></span>                
                </label>                                       
                <label htmlFor='medium' className="button-wrapper">
                <span className="button-label">medium</span>
                  <input 
                    type='radio' 
                    id='medium' 
                    name='size'
                    value='M'
                    checked={selectedSize === 'M'}
                    onChange={onSizeChange}
                  />
                  <span className="button" id="medium-button"></span>                   
                </label>                                        
                <label htmlFor='large' className="button-wrapper">
                  <span className="button-label">large</span>
                  <input 
                    type='radio' 
                    id='large' 
                    name="size"
                    value='L'
                    checked={selectedSize === 'L'}
                    onChange={onSizeChange} 
                  />    
                  <span className="button" id='large-button'></span>                  
                </label>
              </div>
              <button className="add-cart-button" onClick={addToCart}>
                <div className="add-bag-text">Add to Bag</div>
              </button>
            </form> 
        </div>  
      </div>   
  )
}

export default ProductDetail;