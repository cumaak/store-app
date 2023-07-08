import BasketContext from '@/store'
import React, { useContext } from 'react'

function Checkout() {
    const { basket } = useContext(BasketContext)
    let totalPrice = 0
    basket.forEach(item => {
        totalPrice += item.price
    });
    return (
        <div className='sm:px-20 px-8'>
            {basket.map((item) => {
                return (
                    <div key={item.id} className='flex sm:flex-row flex-col border-b py-3'>
                        <div className='w-44 h-44'>
                            <img className='object-contain w-full h-full' src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className='overflow-hidden flex items-center'>
                            <div className='w-[500px] px-10'>
                                <h3 className='sm:text-2xl text-xl'>{item.title}</h3>
                                <h3 className='sm:text-base text-sm'>{item.brand}</h3>
                            </div>
                            <h3 className='w-20 sm:text-2xl text-xl'>${item.price}</h3>
                        </div>
                    </div>
                )
            })}
            <div className='flex gap-5 items-center justify-center p-5 sm:text-2xl text-xl sm:mr-32'>
                <h3>Total Price: <span className='font-semibold'>${totalPrice}</span></h3>
                <button className='bg-red-400 hover:bg-red-500 transition-colors px-7 py-2 rounded text-white text-lg'>Payment</button>
            </div>
        </div>
    )
}

export default Checkout