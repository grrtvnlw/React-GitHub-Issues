import React, { Component } from 'react'
import Issue from './Issue';
import { Container } from 'react-bootstrap'
import closed from './closed.svg'

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
        <Container className="border">
          <div className="header">
            <div className="headerImg">
              <img src={closed}></img>
            </div>
            <div className="headerContent">
              <p className="open">490 Open</p>
            </div>
            <div className="headerContent">
              <p className="closed">✔️ 5,415 Closed</p>
            </div>
          </div>
        </Container>
        { this.state.issues.map(issue => <Issue key={issue.id} issue={issue} />)}
      </div>
    )
  }
}
