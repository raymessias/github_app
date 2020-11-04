'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Ver repositórios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func,
  getStarred: PropTypes.func
}

export default Actions
