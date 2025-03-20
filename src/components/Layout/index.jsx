import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'


function Layout() {
  return (
    <div>
      <Navbar />
      <main className='main-content'>
        <Outlet/>
      </main>
      <Footer />
    </div>

  )
}

export default Layout
