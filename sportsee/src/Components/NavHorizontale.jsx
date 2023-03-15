import React from 'react'
import '../Style/Components/Nav-horiz.css'
import logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom'
/**
 * @component
 * @returns {JSX.Element} NavHorizontale component
 */
function NavHorizontale() {
  return (
    <div className="navHorizon">
      <header>
        <img src={logo} alt="logo SportSee" />
        <nav>
          <NavLink to="/" className="navigation">
            Accueil
          </NavLink>
          <NavLink to="" className="navigation">
            Profil
          </NavLink>
          <NavLink to="" className="navigation">
            Réglage
          </NavLink>
          <NavLink to="" className="navigation">
            Communauté
          </NavLink>
        </nav>
      </header>
    </div>
  )
}
export default NavHorizontale
