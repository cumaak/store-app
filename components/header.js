import React from "react";
import Link from 'next/link'
import Navbar from './navbar';
import SearchInput from "./searchInput";
import Basket from "./basket";
import Sidebar from "./sidebar";

function Header() {
    
    return (
        <header className='bg-red-500 py-2 lg:py-0 px-6 flex h-20 items-center'>
            <Sidebar/>
            <Link href="/" className='font-extrabold text-2xl'>LOGO</Link>
            <Navbar/>
            <SearchInput/>
            <Basket/>
        </header>
    )
}

export default Header