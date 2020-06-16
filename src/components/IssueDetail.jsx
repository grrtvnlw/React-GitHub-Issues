import React, { Component } from 'react'

export default class IssueDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      detail: {},
    }
  }

  componentDidMount() {
    const { issueNumber } = this.props.match.params;
    fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          detail: data,
          loading: false,
        })
      })
  }

  render() {
    if (this.state.loading) {
      return <span>Loading Issue...</span>
    }

    const { title, number } = this.state.detail;

    return (
      <div>
        <h1>{ title } <span style={{ color: '#ccc'}}>#{ number }</span></h1>
      </div>
    )
  }
}
