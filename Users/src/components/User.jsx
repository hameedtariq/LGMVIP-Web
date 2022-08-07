import React from 'react'
import Card from './Card'
import './User.css'

const User = ({avatar, first_name, last_name,email}) => {
  return (
    <div className='user'>
        <Card>
        <div className="avatar"><img src={avatar} /></div>
        <h3>{first_name} {last_name}</h3>
        <p>{email}</p>
        </Card>
    </div>
  )
}

export default User