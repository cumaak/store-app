import ProductsItems from '@/components/productsItems'
import React from 'react'

function SearchValue({products}) {
  return (
    <ProductsItems products ={products}/>
  )
}

export default SearchValue

export const getServerSideProps = async (context) => {
    const { params } = context
    const { searchValue } = params
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
    const data = await response.json()
    const products = data.products
  
    return {
      props: {
        products,
      },
    };
  };