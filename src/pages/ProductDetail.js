import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const { id } = useParams();
  useEffect(() => {
    findProduct();
  }, []);

  const [product, setProduct] = useState({});

  const findProduct = () => {
    const {featured} = props;
    const index = featured.findIndex((product) => product.id === id)
    setProduct(featured[index]);
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  )
}

export default ProductDetail;