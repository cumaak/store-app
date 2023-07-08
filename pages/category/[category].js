import ProductsItems from '@/components/productsItems'
import React from 'react'

function Page({ products }) {
  return (
    <ProductsItems products = {products}/>
  )
}

export default Page

export const getServerSideProps = async (context) => {
  const { params } = context
  const { category } = params
  const response = await fetch(`https://dummyjson.com/products/category/${category}`)
  const data = await response.json()
  const products = data.products

  return {
    props: {
      products,
    },
  };
};
