import React, { useContext } from 'react'
import BasketContext from '@/store'
import Link from 'next/link'

function ProductsItems(props) {
  const { basket, setBasket } = useContext(BasketContext)
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-8'>
      {props.products.map((product) => {
        return (
          <div key={product.id} className='rounded-md p-3 bg-slate-100'>
            <div className='flex items-center justify-center h-80'>
              <img className='object-contain w-full h-full' src={product.thumbnail} alt={product.title} />
            </div>
            <div className='flex flex-col items-center'>
              <Link href={`/products/${product.id}`} className="overflow-hidden text-xl truncate hover:underline">{product.title}</Link>
              <h2 className='text-sm'>{product.brand}</h2>
              <h3 className="mt-2 text-lg">${product.price}</h3>
              <button onClick={() => { setBasket([...basket, product]) }} className="py-2 px-5 mt-2 text-white transition-colors bg-blue-500 border rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>)
      })}
    </div>
  )
}

export default ProductsItems