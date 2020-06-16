import React, { Component } from 'react'
import ReactMarkdown from "react-markdown/with-html";
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import { Container } from 'react-bootstrap'
import open from './open.svg'
import moment from 'moment';

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

    const { title, number, user, updated_at, comments, body } = this.state.detail;

    moment().format()

    console.log(this.state.detail)
    return (
      <div>
        <Container>
          <div className="issueHeader">
            <h1>{ title } <span style={{ color: '#999'}}>#{ number }</span></h1>
            <div className="openIssue">
              <span className="openIcon">
                <img src={open}></img> Open
              </span>
              <span className="issueInfo">
                <a href={ user.html_url } className="userName">{ user.login }</a> opened this issue {moment(updated_at).fromNow()} - { comments ? comments : comments } comments
              </span>
            </div>
          </div>
          <hr />
          <div className="issueBody border">
            <div className="bodyHeader">
              <a href={ user.html_url } className="userName">{ user.login }</a> commented {moment(updated_at).fromNow()}
            </div>
            <div className="bodyMain">
              <ReactMarkdown source={ body } escapeHtml={ false } />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
