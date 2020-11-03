'use strict'

import React, { Component } from 'react'

import AppContent from './components/appContent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: 'Raynull',
      repos: ['raynon']
    }
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
    />
  }
}
export default App
