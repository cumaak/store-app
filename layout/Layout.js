import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { useState } from 'react'
import BasketContext from '@/store'

function Layout({ children }) {
  const [basket, setBasket] = useState([])
  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      <div className='flex flex-col h-screen'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </BasketContext.Provider>
  )
}

export default Layout