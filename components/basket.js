import React, { useContext, useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import BasketContext from '@/store';
import cn from "classnames";
import Link from 'next/link';

function Basket() {
    const {basket} = useContext(BasketContext)
    const [isOpen, setIsOpen] = useState(false)

    let totalPrice = 0
    basket.forEach(item => {
        totalPrice += item.price
    });
    return (
        <button onClick={()=> {setIsOpen(!isOpen)}} className='realtive mx-6 hover:bg-red-400 w-12 h-10 rounded'>
            <IoCartOutline size={25} className='mx-auto my-1.5' />
            <div className={cn('absolute bg-white border rounded top-16 right-0 p-4 w-80 shadow-lg', isOpen===true ? 'block' : 'hidden')}>
                <h3 className='font-medium'>Cart</h3>
                {basket.map((item)=>{
                    return(
                        <div key={item.id} className='flex border-b py-3'>
                            <div className='w-12 h-12'>
                                <img className='object-contain w-full h-full' src={item.thumbnail} alt={item.title}/>
                            </div>
                            <div className='overflow-hidden flex'>
                                <h3 className='w-56 px-1.5'>{item.title}</h3>
                                <h3 className='w-12'>${item.price}</h3>
                            </div>
                        </div>
                    )
                })}
                <h3 className='pt-2 pb-4'>Total Price: <span className='font-semibold text-lg'>${totalPrice}</span></h3>
                <Link href="/checkout" className='px-20 py-2.5 bg-red-400 rounded hover:bg-red-500 transition-colors text-white'>Checkout</Link>
            </div>
        </button>
    )
}

export default Basket