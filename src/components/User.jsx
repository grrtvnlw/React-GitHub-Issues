import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import UserCardList from './UserCardList';

export default class User extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      users: []
    }
  }

  handleChange = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ 
          users: data ? [...this.state.users, data] : [],
          userName: ''
        })
      })
    
  }

  render() {
    return (
      <div>
        <form className="d-flex flex-column align-items-center" onSubmit={ this.handleSubmit }>
          <label for="userName" className="p-0 m-0">Search for a user</label>
          <input type="text" name="userName" className="" value={ this.state.userName } onChange={ this.handleChange }></input>
          <button type="submit" className="m-3">Search</button>
        </form>
        <UserCardList arrayOfUsers={ this.state.users } />
      </div>
    )
  }
}
