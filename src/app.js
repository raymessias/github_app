'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/appContent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userprops: null,
      repos: [],
      starred: []
    }
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const url = `https://api.github.com/users/${value}`

    if (keyCode === ENTER) {
      ajax().get(url).then(result => {
        this.setState({
          userprops: {
            login: result.login,
            username: result.name,
            photo: result.avatar_url,
            repos: result.public_repos,
            link: result.html_url,
            followers: result.followers,
            following: result.following
          }
        })
      })
    }
  }

  getRepos() {
    console.log('get repos')
  }

  getStarred() {
    console.log('get starred')
  }

  render() {
    return (
      <AppContent
        userprops={this.state.userprops}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={e => this.handleSearch(e)}
        getRepos={() => this.getRepos()}
        getStarred={() => this.getStarred()}
      />)
  }
}

export default App
