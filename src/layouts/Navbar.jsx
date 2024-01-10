import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav>
                <div className='navText'>
                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png" alt="" />
                    <div className='navRight'>
                        <Link to={'/'}><p>Home</p></Link>
                        <Link to={'/about'}><p>About</p></Link>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                </div>


            </nav>
        </>
    )
}

export default Navbar