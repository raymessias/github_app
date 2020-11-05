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
      starred: [],
      isFetching: false
    }
  }

  getGitHubApi(username, type) {
    const intUser = username ? `/${username}` : ''
    const intType = type ? `/${type}` : ''
    return `https://api.github.com/users${intUser}${intType}`
  }

  handleSearch(e) {
    const target = e.target
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    const url = this.getGitHubApi(target.value)

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })
      ajax()
        .get(url)
        .then(result => {
          this.setState({
            userprops: {
              login: result.login,
              username: result.name,
              photo: result.avatar_url,
              repos: result.public_repos,
              link: result.html_url,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => {
          this.setState({
            isFetching: false
          })
        })
    }
  }

  getRepos(type) {
    return () => {
      const username = this.state.userprops.login
      const url = this.getGitHubApi(username, type)

      ajax()
        .get(url)
        .then(result => {
          this.setState({
            [type]: result.map(elem => ({
              name: elem.name,
              link: elem.html_url
            }))
          })
        })
    }
  }

  render() {
    return (
      <AppContent
        userprops={this.state.userprops}
        repos={this.state.repos}
        starred={this.state.starred}
        isFetching={this.state.isFetching}
        handleSearch={e => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />)
  }
}

export default App
