import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import { Container } from 'react-bootstrap'

export default class UserDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
    }
  }

  componentDidMount() {
    const { userName } = this.props.match.params;
    fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ 
          users: data
        })
      })
  }

  render() {

    const { avatar_url, name, login, email, company, location, bio, blog, twitter_username, repos_url, id, html_url, followers, following, public_repos } = this.state.users;
    
    return (
      <Container>
        <div className="box">
          <div className="boxImage">
            <img src={avatar_url} width="300"></img>
          </div>
          <div className="boxData">
            {name && <p><b>Name:</b> { name }</p>}
            {login && <p><b>Login:</b> { login }</p>}
            {email && <p><b>Email:</b> { email }</p>}
            {company && <p><b>Company:</b> { company }</p>}
            {location && <p><b>Location:</b> { location }</p>}
            {bio && <p><b>Bio:</b> { bio }</p>}
            {blog && <p><b>Blog:</b> <a href={ blog } target="_blank">{ blog }</a></p>}
            {twitter_username && <p><b>Twitter:</b> <a href={`https://www.twitter.com/${twitter_username}`} target="_blank">{ twitter_username }</a></p>}
            {repos_url && 
              <p>
                <b>GitHub:</b> <a href={ html_url } target="_blank">{ html_url }</a>
                  <ul>
                    <li>Public Repos: { public_repos }</li>
                    <li>Following: { following }</li>
                    <li>Followers: { followers }</li>
                  </ul>
              </p>}
            {id && <p><b>User ID:</b> { id }</p>}
          </div>
        </div>
      </Container>
    )
  }
}
