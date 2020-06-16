import React, { Component } from 'react'
import Issue from './Issue';
import Header from './Header'

export default class IssueList extends Component {
  constructor() {
    super();
    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/facebook/create-react-app/issues')
      .then(res => res.json())
      .then(data => {
        this.setState({ 
          issues: data ? data : [] 
        })
      })
  }

  render() {
    return (
      <div>
        <Header />
        { this.state.issues.map(issue => <Issue key={issue.id} issue={issue} />)}
      </div>
    )
  }
}
