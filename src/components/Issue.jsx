import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import icon from './icon.svg'
import commentImg from './comments.svg'
import { Container } from 'react-bootstrap'
import moment from 'moment';


function Issue({issue}) {

  const { html_url, title, body, labels, number, updated_at, user, comments, comments_url } = issue;

  moment().format()

  return (
    <Container className="border">
      {console.log(labels)}
      <ul>
        <li><div className="main"><a href={html_url} target="_blank">{title}</a> {labels.map(label => <span className="label" style={{backgroundColor: `#${label.color}`}}><a href={label.url} target="_blank">{label.name}</a></span>)}</div><div className="comments"><a className="commentLink" href={comments_url}>{comments ? <><img src={commentImg}></img> {comments}</>: null}</a></div><br />
        <span className="number">{`#${number} Opened ${moment(updated_at).fromNow()} hours ago by`} <a className="user" href={user.html_url}>{user.login}</a></span></li>
      </ul>
      {/* <p>{body}</p> */}
    </Container>
  );
}

export default Issue;