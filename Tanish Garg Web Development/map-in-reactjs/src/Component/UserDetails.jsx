import React from 'react'

const UserDetails = () => {

  const users = [
    {
      name: 'John Doe',
      fatherName: 'Michael Doe',
      rollNo: '001',
      email: 'john@example.com',
    },
    {
      name: 'Jane Smith',
      fatherName: 'David Smith',
      rollNo: '002',
      email: 'jane@example.com',
    },
    {
      name: 'Alice Johnson',
      fatherName: 'Bob Johnson',
      rollNo: '003',
      email: 'alice@example.com',
    },
    {
      name: 'Bob Williams',
      fatherName: 'Steve Williams',
      rollNo: '004',
      email: 'bob@example.com',
    },
    {
      name: 'Mary Brown',
      fatherName: 'Richard Brown',
      rollNo: '005',
      email: 'mary@example.com',
    },
    {
      name: 'David Taylor',
      fatherName: 'James Taylor',
      rollNo: '006',
      email: 'david@example.com',
    },
    {
      name: 'Emily Anderson',
      fatherName: 'Thomas Anderson',
      rollNo: '007',
      email: 'emily@example.com',
    },
    {
      name: 'Michael Wilson',
      fatherName: 'Charles Wilson',
      rollNo: '008',
      email: 'michael@example.com',
    },
    {
      name: 'Sophia Martinez',
      fatherName: 'Joseph Martinez',
      rollNo: '009',
      email: 'sophia@example.com',
    },
    {
      name: 'Daniel Jones',
      fatherName: 'Matthew Jones',
      rollNo: '010',
      email: 'daniel@example.com',
    },
    {
      name: 'Olivia Garcia',
      fatherName: 'Daniel Garcia',
      rollNo: '011',
      email: 'olivia@example.com',
    },
    {
      name: 'William Hernandez',
      fatherName: 'Christopher Hernandez',
      rollNo: '012',
      email: 'william@example.com',
    },
    {
      name: 'Isabella Lopez',
      fatherName: 'Edward Lopez',
      rollNo: '013',
      email: 'isabella@example.com',
    },
    {
      name: 'James Hill',
      fatherName: 'Brian Hill',
      rollNo: '014',
      email: 'james@example.com',
    },
    {
      name: 'Charlotte Young',
      fatherName: 'Ronald Young',
      rollNo: '015',
      email: 'charlotte@example.com',
    },
    {
      name: 'Ethan Lee',
      fatherName: 'Gary Lee',
      rollNo: '016',
      email: 'ethan@example.com',
    },
    {
      name: 'Amelia Moore',
      fatherName: 'Timothy Moore',
      rollNo: '017',
      email: 'amelia@example.com',
    },
    {
      name: 'Alexander Clark',
      fatherName: 'Larry Clark',
      rollNo: '018',
      email: 'alexander@example.com',
    },
    {
      name: 'Abigail Lewis',
      fatherName: 'Kenneth Lewis',
      rollNo: '019',
      email: 'abigail@example.com',
    },
    {
      name: 'Benjamin King',
      fatherName: 'Harry King',
      rollNo: '020',
      email: 'benjamin@example.com',
    },
  ];

  return (
    <div>
      {users.map((users) => {
        return <>
          <p>Name</p>
          <b>{users.name}</b>
          <p>fatherName</p>
          <b>{users.fatherName}</b>
          <p>email</p>
          <b>{users.email}</b>
          <p>rollNo</p>
          <b>{users.rollNo}</b>
          <br />
        </>
      })}
    </div>
  )
}

export default UserDetails
