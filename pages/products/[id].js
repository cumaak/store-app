import Product from '@/components/product'
import React from 'react'

function Page({ data }) {
    return (
        <Product data = {data}/>
    )
}

export default Page

export const getServerSideProps = async (context) => {
    const { params } = context
    const { id } = params
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json()
    return {
        props: {
            data,
        },
    }
}