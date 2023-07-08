"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { IoSearch } from "react-icons/io5";

function SearchInput() {
    const [searchValue, setSearchValue] = useState("")

    return (
        <div className='flex sm:ml-auto ml-11 rounded border'>
            <Link href={searchValue.length > 0 ? `/search/${searchValue}` : `#`} onClick={() => setSearchValue("")} className='bg-white pt-1.5 px-2'>
                <IoSearch size={25} />
            </Link>
            <input type='text' placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className='h-9 py-4 outline-none w-24 sm:w-32 md:w-36 lg:w-44'></input>
        </div>
    )
}

export default SearchInput