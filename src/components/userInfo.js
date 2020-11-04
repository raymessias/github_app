'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userprops }) => (
  <div className='user-info'>
    <img src={userprops.photo} />
    <h1>
      <a href={userprops.link}>{userprops.username}</a>
    </h1>
    <ul className='repos-info'>
      <li>Repositórios: {userprops.repos}</li>
      <li>Seguidores: {userprops.followers}</li>
      <li>Seguindo: {userprops.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userprops: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}
export default UserInfo
