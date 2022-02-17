import React from "react";
import ProductCard from "../components/ProductCard";

const Products = (props) => {
  const { allProducts } = props;

  return (
    <div className="grid-products-wrapper">
      {allProducts.map(product => (
        <div key={product.id} className='product-wrapper'>
          <ProductCard 
            id={product.id}
            name={product.name}
            type={product.type}
            price={product.price}
            mainImage={product.mainImage}
            sideImage={product.sideImage}
          />              
        </div>     
      ))}
    </div>
  )
}

export default Products;