import React from 'react'

export default function UserCard({ user }) {
  return (
    <div>
      <p>{ user.name }</p>
      <p>{ user.id }</p>
      <p>{ user.location }</p>
      <img src={user.avatar_url}></img>
    </div>
  )
}
