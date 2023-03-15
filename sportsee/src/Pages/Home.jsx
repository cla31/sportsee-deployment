import React from 'react'
import UserCard from '../Components/UserCard'
import '../Style/Pages/Home.css'
// import Homme from '../Assets/Homme.png'
// import Femme1 from '../Assets/Femme.png'
import Femme2 from '../Assets/FemmeMocked.png'
/**
 * Display the home page
 * @component
 * @returns {JSX.Element} Home component
 */
const Home = () => {
  return (
    <div className="login">
      <h2 className="userCardsTitle"> Page connexion des utilisateurs :</h2>
      <div className="userCards">
        {/* <UserCard avatar={Homme} name="Karl Dovineau" id="12" />
        <UserCard avatar={Femme1} name="Cecilia Ratorez" id="18" /> */}
        <UserCard avatar={Femme2} name="Mocked Person" id="15" />
      </div>
    </div>
  )
}

export default Home
