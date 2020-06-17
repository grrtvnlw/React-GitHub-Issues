import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Card } from 'react-bootstrap'

export default function UserCard({ user }) {
  return (
    <Container>
      <div className="box">
        <div className="boxImage">
          <img src={user.avatar_url} width="300"></img>
        </div>
        <div className="boxData">
          {user.name && <p><b>Name:</b> { user.name }</p>}
          {user.login && <p><b>Login:</b> { user.login }</p>}
          {user.email && <p><b>Email:</b> { user.email }</p>}
          {user.company && <p><b>Company:</b> { user.company }</p>}
          {user.location && <p><b>Location:</b> { user.location }</p>}
          {user.bio && <p><b>Bio:</b> { user.bio }</p>}
          {user.blog && <p><b>Blog:</b> <a href={ user.blog } target="_blank">{ user.blog }</a></p>}
          {user.twitter_username && <p><b>Twitter:</b> <a href={`https://www.twitter.com/${user.twitter_username}`} target="_blank">{ user.twitter_username }</a></p>}
          {user.repos_url && <p><b>GitHub:</b> <a href={ user.html_url } target="_blank">{ user.html_url }</a>
          <ul>
            <li>Public Repos: { user.public_repos }</li>
            <li>Following: { user.following }</li>
            <li>Followers: { user.followers }</li>
          </ul>
          </p>}
          {user.id && <p><b>User ID:</b> { user.id }</p>}
        </div>
      </div>
    </Container>
  )
}
