import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import IssueList from './components/IssueList';
import { Container } from 'react-bootstrap'
import closed from './components/closed.svg'

function App() {
  return (
    <div className="App">
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
      <IssueList />
    </div>
  );
}

export default App;
