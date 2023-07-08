import React, { useContext } from 'react'
import BasketContext from '@/store'

function Product({ data }) {
    const { basket, setBasket } = useContext(BasketContext)
    return (
        <div className='flex sm:flex-row flex-col p-10 h-screen'>
            <div className='flex items-center justify-center sm:h-3/4 h-2/5 sm:w-1/2 w-full p-5 border'>
                <img className='object-contain w-full h-full' src={data.thumbnail} alt={data.title} />
            </div>
            <div className='flex flex-col justify-between sm:h-3/4 h-3/5 sm:w-1/2 w-full p-5 border'>
                <div className='flex flex-col sm:gap-5 gap-2'>
                    <h2 className='text-sm'>{data.brand}</h2>
                    <h3 className='sm:text-3xl text-xl'>{data.title}</h3>
                    <p className='sm:text-xl text-base'>{data.description}</p>
                    <span className='border p-2 w-11 rounded-[50%] bg-orange-500 text-white font-semibold'>{data.rating.toFixed(1)}</span>
                </div>
                <div>
                    <h3 className='my-5 sm:text-5xl text-2xl font-bold'>${data.price}</h3>
                    <button onClick={() => { setBasket([...basket, data]) }} className="py-3 px-20 mt-2 text-white transition-colors bg-blue-500 border rounded hover:bg-blue-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product