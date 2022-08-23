import React from 'react'
import './Record.css'

const Record = ({records}) => {
  return (
    <div className='record'>
        <div className="list">
            <div className="card">
                <div className="desc">Description</div>
                <div className="image">Image</div>
            </div>
            {records.map( (record)=>{
              return(
                <div className="card">
                  <div className="desc">
                    <h3>{record.name}</h3>
                    <p>{record.gender}</p>
                    <p>{record.email}</p>
                    <p>{record.website}</p>
                    <p>{record.skills.join(',')}</p>                    
                  </div>
                  <div className="image"><img src={record.image ? record.image : "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"} /></div>
              </div>
              )
            })}
        </div>
    </div>
  )
}

export default Record