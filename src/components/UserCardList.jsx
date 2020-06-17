import React from 'react'
import UserCard from './UserCard';

function UserCardList({ arrayOfUsers }) {
  console.log(arrayOfUsers)
  return (
    <div> 
      { arrayOfUsers.map((user, index) => {
        return (
          <UserCard user={ user } key={ index } />
          )
        })
      }
  </div>
  )
}

export default UserCardList;
