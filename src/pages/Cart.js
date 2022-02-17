import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cartArray, addToAmount, minusAmount, removeFromCart, cartFade, closeCart, openCart } = props;
  const [cartContents, setCartContents] = useState([]);

  useEffect(() => {
    setCartContents(cartArray);
  }, [cartArray]);

  return (
    <div className={`cart-wrapper ${cartFade}`}>
      <div className="cart-content-wrapper">
        {cartArray.length === 0
        ? <h1><span>Your bag is empty</span></h1>
        : <h1><span>Items in your bag:</span> <span>{cartArray.reduce((a, {amount}) => a + amount, 0)}</span></h1>
        }
        <div className="cart-product-overflow-wrapper">
          {cartContents.map(product => (
                <div 
                  key={product.id}
                  className='cart-product-wrapper'
                >
                  <Link to={`products/${product.id}`}>              
                  <img src={product.mainImage} alt={product.name} />
                  </Link>
                  <div className="cart-label-wrapper">
                    <div className="cart-name-price-type-wrapper">
                      <div className="cart-product-name-wrapper">
                        <span className="product-name">{product.name}</span>
                        <span className="product-type">{product.type}</span>                  
                      </div>
                      <span className="product-price">${product.subTotal}.00</span>
                    </div>
                    <div className="product-size">
                      <span>SIZE</span>
                      <span>{product.size}</span>
                    </div>
                    <div className="cart-product-controls-wrapper">
                      {product.amount < 2
                        ? <button className="minus-button" id={product.id} onClick={minusAmount} disabled>−</button>
                        : <button className="minus-button" id={product.id} onClick={minusAmount}>−</button>
                      }
                      
                      <span>{product.amount}</span>
                      <button className="plus-button" id={product.id} onClick={addToAmount}>+</button>
                      <button className="remove-button" id={product.id} onClick={removeFromCart}>REMOVE</button>
                    </div>
                  </div>  
                </div>            
            ))}          
        </div>
        {cartArray.length !== 0 &&
          <div className="cart-subtotal-wrapper">
            <div className="subtotal-text-wrapper">
              <span className="subtotal-title">Subtotal</span>
              <span className="subtotal-number">${cartArray.reduce((a, {subTotal}) => a + subTotal, 0)}.00</span>
            </div>
            <div className="shipping-disclaimer">
              Final cost will depend on shipping method and taxes.
            </div>
            <div className="checkout-buttons-wrapper">
              <button className="checkout-button"><div className="checkout-button-text">Checkout</div></button>
              <button className="bag-button"><div className="bag-button-text">View your bag</div></button>
            </div>
          </div>         
        }
      </div>
    </div> 
  )
}

export default Cart;