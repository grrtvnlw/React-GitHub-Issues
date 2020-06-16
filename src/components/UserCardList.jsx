import React from 'react'
import UserCard from './UserCard';

function UserCardList({ arrayOfUsers }) {
  console.log(arrayOfUsers)
  return (
    <div> 
      { arrayOfUsers.map((user) => {
        return (
          <UserCard user={ user } />
          )
        })
      }
  </div>
  )
}

export default UserCardList;
