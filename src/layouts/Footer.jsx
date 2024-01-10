import React from 'react'
import './footer.scss'
function Footer() {
  return (
    <>
      <footer>
        <div className='footerText'>
          <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <span>Colorlib</span></p>
          <div className='icons'>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-solid fa-globe"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer