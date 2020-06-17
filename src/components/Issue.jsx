import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import icon from './icon.svg'
import commentImg from './comments.svg'
import { Container } from 'react-bootstrap'
import moment from 'moment';
import { Link } from 'react-router-dom'


function Issue({issue}) {

  const { html_url, title, body, labels, number, updated_at, user, comments, comments_url } = issue;

  moment().format()

  return (
    <Container className="border">
      <div>
        <div className="left">
          <img src={icon}></img>
        </div>
        <div className="main">
          {/* <a href={html_url} target="_blank" className="issueTitle">{title}</a> {labels.map(label => <span key={ label.id } className="label" style={{backgroundColor: `#${label.color}`}}><a href={label.url} target="_blank">{label.name}</a></span>)} */}
          <Link to={`/issue/${number}`} target="_blank" className="issueTitle">{title}</Link> {labels.map(label => <span key={ label.id } className="label" style={{backgroundColor: `#${label.color}`}}><a href={label.url} target="_blank">{label.name}</a></span>)}
          <br />
          <span className="number">{`#${number} Opened ${moment(updated_at).fromNow()} hours ago by `} 
          {/* <a className="user" href={user.html_url}>{user.login}</a></span> */}
          <Link className="user" target="_blank" to={`/users/${user.login}`}>{user.login}</Link></span>

        </div>
        <div className="comments">
          {comments ? <a className="commentLink" href={comments_url}><img className="commentImg" src={commentImg}></img> {comments}</a> : null}
        </div>
      </div>
    </Container>
  );
}

export default Issue;