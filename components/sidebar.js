import React, { useState } from 'react'
import Link from 'next/link'
import { HiMenu } from "react-icons/hi";
import cn from "classnames";
import {categories} from 'constant'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative lg:hidden mr-5'>
        <button onClick={()=>{setIsOpen(!isOpen)}} className='mt-1.5'><HiMenu size={30}/></button>
        <div className={cn('absolute w-[185px] px-2 py-2 bg-red-500 text-lg duration-500 rounded-br-md', isOpen === true ? '-left-6' : '-left-60')}>
            {categories.map((category) => {
                return <div key={category.name}>
                <Link href={`/category/${category.name}`} className='hover:opacity-60'>{category.title}</Link>
            </div>
            })}
        </div>
    </div>
  )
}

export default Sidebar