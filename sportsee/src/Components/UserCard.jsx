import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Components/UserCards.css'
import PropTypes from 'prop-types'

/**
 * @component
 * @param {String} [props.id='']
 * @param {String} [props.avatar='']
 * @param {String} [props.name='']
 * @returns {JSX.Element} UserCard component
 */
const UserCard = ({ id, avatar, name }) => {
  return (
    <Link to={`/user/${id}`} className="userCard">
      {/* {console.log('Entrée composant UserCard', data)} */}
      <li>
        <img src={avatar} alt="" />
        <p>{name}</p>
      </li>
    </Link>
  )
}
//Typage des props
UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
}
export default UserCard
