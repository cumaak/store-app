
import React from 'react'
import {categories} from 'constant'
import NavbarSection from './navbarSection';

function Navbar() {
    const mensCategories = categories.slice(13,16)
    const womenCategories = categories.slice(8,13)
    const electronicsCategories = categories.slice(0,2)
    const groceriesCategories = categories.slice(4,5)
    

    return (
        <nav className='hidden lg:flex ml-80 gap-6 text-white font-light'>
            <NavbarSection title = "Categories" categories = {categories}/>
            <NavbarSection title = "Men" categories = {mensCategories}/>
            <NavbarSection title = "Women" categories = {womenCategories}/>
            <NavbarSection title = "Electronics" categories = {electronicsCategories}/>
            <NavbarSection title = "Groceries" categories = {groceriesCategories}/>
        </nav>
    )
}

export default Navbar