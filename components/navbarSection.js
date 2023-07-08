"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import cn from "classnames";

function NavbarSection(props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div onMouseOver={() => setIsOpen(true)} onMouseOut={() => setIsOpen(false)} className='relative py-5 cursor-pointer'>
            <h4>{props.title}</h4>
            <div className={cn('absolute bg-slate-500 grid-cols-2 gap-3 p-2 w-max top-16', isOpen === true ? 'grid' : 'hidden')}>
                {props.categories.map((category) => {
                    return <div key={category.name}>
                        <Link href={`/category/${category.name}`} className='hover:opacity-60'>{category.title}</Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default NavbarSection