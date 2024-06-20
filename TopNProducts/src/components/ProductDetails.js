import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataProvider';

const ProductDetails = () => {
    const {prod} = useContext(DataContext);
    const {id} = useParams();
    const product = prod[id];
    if(!product) return <p>Product Not Found</p>;
  return (
    <div>
        <h1>{product.productName}</h1>
        <p>Price:{product.price}</p>
        <p>Rating:{product.rating}</p>
        <p>Discount:{product.discount}</p>
        <p>Availability:{product.availability}</p>
    </div>
  )
}

export default ProductDetails