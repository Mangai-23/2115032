import React from 'react'
import {Link} from 'react-router-dom';
const ProductList = ({products}) => {
  return (
    <ul>
        {products.map((product,index) =>(
            <li key={index}>
            <Link to={`/products/${index}`}>{product.productName}</Link>
            <p>Price:{product.price}</p>
            <p>Rating:{product.rating}</p>
            <p>Discount:{product.discount}</p>
            <p>Availability{product.availability}</p>
          </li>
        ))}
    </ul>
  )
}

export default ProductList