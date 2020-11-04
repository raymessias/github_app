'use strict'

import React, { Component } from 'react'

import AppContent from './components/appContent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: {
        username: 'Raynon Messias',
        photo: 'https://avatars3.githubusercontent.com/u/59324178?v=4',
        login: 'raymessias',
        repos: 12,
        followers: 3,
        following: 5
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo2',
        link: '#'
      }]
    }
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}
export default App
