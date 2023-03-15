import React from 'react'
import '../Style/Pages/PageErreur.css'
import { Link } from 'react-router-dom'
import notFound from '../Assets/notFound.svg'

/**
 * Creation of 404 error page with link back to home page
 * @component
 * @returns {JSX.Element} Page404 component
 */

const PageErreur = () => {
  return (
    <div>
      <div className="message-erreur">
        <img src={notFound} alt="" />
        <span>
          Oups! La page que vous demandez n'existe pas ou le serveur est
          indisponible.
        </span>
        <Link to="/" className="message">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}

export default PageErreur
