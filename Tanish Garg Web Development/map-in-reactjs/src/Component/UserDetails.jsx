import React from 'react'
import userList from './UserData'

const UserDetails = () => {
  return (
    <div>
      {userList.map(({ name, fatherName, email, rollNo }) => {
        return <>
          <p>Name</p>
          <b>{name}</b>
          <p>fatherName</p>
          <b>{fatherName}</b>
          <p>email</p>
          <b>{email}</b>
          <p>rollNo</p>
          <b>{rollNo}</b>
          <br />
        </>
      })}
    </div>
  )
}


export default UserDetails
