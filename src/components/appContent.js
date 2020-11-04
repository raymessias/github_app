'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Seach from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = el => (
  <div className='app'>
    <Seach handleSearch={el.handleSearch} />
    {!!el.userprops && <UserInfo userprops={el.userprops} />}

    {!!el.userprops && <Actions
      getRepos={el.getRepos}
      getStarred={el.getStarred}
    />}

    {!!el.repos.length && <Repos
      className='repos'
      title='Repositórios'
      repos={el.repos}
    />}

    {!!el.starred.length && <Repos
      className='starred'
      title='Favoritos'
      repos={el.starred}
    />}
  </div>
)

AppContent.propTypes = {
  props: PropTypes.shape({
    userprops: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    handleSearch: PropTypes.func,
    getRepos: PropTypes.func,
    getStarred: PropTypes.func
  })
}

export default AppContent
