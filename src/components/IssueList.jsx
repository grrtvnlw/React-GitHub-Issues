import React, { Component } from 'react'
import Issue from './Issue';

export default class IssueList extends Component {
  constructor() {
    super();
    this.state = {
      issues: []
    }
  }

  getIssue = () => {
    fetch('https://api.github.com/repos/facebook/create-react-app/issues')
    .then(res => res.json())
    .then(data => {
      this.setState({ issues: data });
    })
  }

  componentDidMount() {
    this.getIssue()
  }

  render() {
    return (
      <div>
        { this.state.issues.map((issue, index) => {
          return (
            <Issue key={index} issue={issue} />
          )
          })
        }
      </div>
    )
  }
}
