import React from 'react'
import './DateTime.css'

const DateTime = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const date = new Date();
  return (
    <div className='dateTime'>
        <h1>{days[date.getDay()]}</h1>
        <p>{month[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
    </div>
  )
}

export default DateTime