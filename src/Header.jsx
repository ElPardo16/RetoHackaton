import "./Header.css"
import {FaBars,FaUserAlt,FaBell} from 'react-icons/fa'
function Header() {
  return (
    <nav className="navbar">
      <a href="#Home" className="logo">&#60;YT/&#62;</a>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <div className="BtnOpt">
          <label className="userProfile">{<FaUserAlt />}</label>
          <label className="bell">{<FaBell />}</label>
          <label htmlFor="checkbox_toggle" className="hamburger">{<FaBars />}</label>
        </div>
        <div className="menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Registo</a></li>
          <li><a href="/">Ingreso</a></li>
        </div>
      </ul>
    </nav>
  )
}

export default Header