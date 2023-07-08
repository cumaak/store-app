import React from 'react'
import ProductsItems from "@/components/productsItems"


export default function Home({products}) {
  const topProducts = products.slice(8,26)
  return (
    <div>
      <h2 className='px-8 pt-4 text-xl font-semibold'>Top Products</h2>
      <ProductsItems products = {topProducts}/>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json()
  const products = data.products
  return{
    props:{
      products,
    },
  }
}