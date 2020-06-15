import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import icon from './icon.svg'
import { Container } from 'react-bootstrap'

function Issue({issue}) {

  const { html_url, title, body, label } = issue;

  return (
    <Container className="border">
      <ul>
  <li><a href={html_url} target="_blank">{title}</a>{label}</li>
      </ul>
      {/* <p>{body}</p> */}
    </Container>
  );
}

export default Issue;