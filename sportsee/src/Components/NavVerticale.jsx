import React from 'react'
import '../Style/Components/Nav-vert.css'
import iconePersonne from '../Assets/personne.png'
import iconeNage from '../Assets/nage.png'
import iconeVelo from '../Assets/velo.png'
import iconePoids from '../Assets/poids.png'
import copy from '../Assets/Copiryght.png'
/**
 * @component
 * @returns JSX.Element} NavVerticale component
 */
function NavVerticale() {
  return (
    <div className="navVertical">
      <section className="icones">
        <img src={iconePersonne} alt="représente une personne" />
        <img src={iconeNage} alt="représente une personne qui nage" />
        <img src={iconeVelo} alt="représente une personne en vélo" />
        <img src={iconePoids} alt="représente une altère" />
      </section>
      <img className="copyright" src={copy} alt="copiryght SportSee" />
    </div>
  )
}
export default NavVerticale
