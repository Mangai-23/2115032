import React, { useContext, useEffect } from 'react'
import ProductList from './ProductList';
import DataContext from '../context/DataProvider';

const Home = () => {
    const {prod,loadProd,load} = useContext(DataContext);
    useEffect(()=>{
      loadProd('AMZ','Laptop',10,1,10000);
    },[])
    if(load) return <p>Loading....</p>;
  return (
    <div>
        <h1>Top 10 Laptops</h1>
        <ProductList products={prod} />
    </div>
  )
}

export default Home