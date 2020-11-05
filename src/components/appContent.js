'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Seach from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({
  userprops,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className='app'>
    <Seach isDisabled={isFetching} handleSearch={handleSearch} />
    { isFetching && <div>Carregando...</div>}
    {!!userprops && <UserInfo userprops={userprops} />}
    {!!userprops && <Actions
      getRepos={getRepos}
      getStarred={getStarred}
    />}

    {!!repos.length && <Repos
      className='repos'
      title='Repositórios'
      repos={repos}
    />}

    {!!starred.length && <Repos
      className='starred'
      title='Favoritos'
      repos={starred}
    />}
  </div>
)

AppContent.propTypes = {
  userprops: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
