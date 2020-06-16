import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import { Container } from 'react-bootstrap'
import closed from './closed.svg'

function Header() {

  return (
    <Container className="border">
      <div className="header">
        <div className="headerImg">
          <img src={closed}></img>
        </div>
        <span>
          <p className="open">490 Open</p>
        </span>
        <span>
          <p className="closed">✔️ 5,415 Closed</p>
        </span>
      </div>
    </Container>
  );
}

export default Header;