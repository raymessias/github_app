'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Seach from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos }) => (
  <div className='app'>
    <Seach />
    {!!userinfo && <UserInfo />}
    {!!userinfo && <Actions />}

    {!!repos.length && <Repos
      className='repos'
      title='Repositórios'
      repos={[{
        name: 'Nome do repositório',
        link: '#'
      }]}
    />}

    <Repos
      className='starred'
      title='Favoritos'
      repos={[{
        name: 'Nome do repositório',
        link: '#'
      }]}
    />
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.any,
  repos: PropTypes.array
}

export default AppContent
