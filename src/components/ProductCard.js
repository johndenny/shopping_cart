import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, name, mainImage, sideImage, type, price } = props;

  return (
    <React.Fragment>
      <Link to={`${id}`}>              
      <img src={mainImage} alt={name} />
      <img src={sideImage} alt={name} />
      </Link>
      <div className="label-wrapper">
        <span className="product-name">{name}</span>
        <span className="product-type">{type}</span>
        <span className="product-price">${price}.00</span>
      </div>       
    </React.Fragment>
  )
}

export default ProductCard;