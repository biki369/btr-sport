import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import NavbarB from '../components/navbar/Navbar'
import TopBar from '../components/navbar/topnavbar/Topbar'

const Layout = () => {
    return (
        <div className='app'>
            <TopBar/>
            <NavbarB />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout