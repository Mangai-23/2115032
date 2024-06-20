import React, { createContext, useState } from 'react'
import { getProducts } from '../api/api';
const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [prod,setprod]=useState([]);
    const [load,isload]=useState(true);

    const loadProd =async(company,category,top,minp,maxp)=>{
        try{
            const res=await getProducts(company,category,top,minp,maxp);
            setprod(res.data);
            isload(false);
        }
        catch(err){
            console.error(err);
            // isload(false);
        }
    }
  return (
    <DataContext.Provider value={{prod,load,loadProd}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext;