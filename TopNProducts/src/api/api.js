import axios from 'axios';

const api = axios.create({
    baseURL: 'http://20.244.56.144/test'
})

export const getProducts = (company,category,top=0,minp=0,maxp=0) => {
    return api.get(`/companies/${company}/categories/${category}/products`,{
        params:{top,minp,maxp},
    })
}