import React from 'react'
import './Footer.css'
import logoFooter from './img/logo-footer.png'

function Footer() {
  return (
    <footer>
        <img src={logoFooter} alt="Logo de Young Talent" />
        <div>
          <div className='footer-social_media'>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <h4>© 2022 No Binarios</h4>
        </div>
    </footer>
  )
}

export default Footer