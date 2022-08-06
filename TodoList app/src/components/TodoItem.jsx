import React, { useState } from 'react'
import './TodoItem.css'
import Checkbox from '@mui/material/Checkbox' 
import PushPinIcon from '@mui/icons-material/PushPin';
import DeleteIcon from '@mui/icons-material/Delete';
const TodoItem = ({text,completed, updateTask, _id, deleteTask, pinned}) => {
    const [showOptions, setShowOptions] = useState(false);
  return (
    <div className={`item`}>
        {pinned ? <PushPinIcon className='pinnedTaskMark'/> : null}
        <Checkbox color="default" className='checkbox' checked = {completed} onClick={()=> updateTask(_id, {text,_id,completed: !completed, pinned})}/>
        <span className={`listItemText ${completed ? "completed" : ""}`}>{text}</span>
        <button onClick={()=> setShowOptions(prev => !prev)}>•••</button>
        {showOptions ? <div className='options'>
            <div className='option' onClick={()=> updateTask(_id, {text,_id,completed,pinned: !pinned})}>
                <PushPinIcon className='pinIcon'/>
                <span>{pinned ? 'Remove from pinned' :'Pin on the top'}</span>
            </div>
            <div className='option' onClick={()=> deleteTask(_id)}>
                <DeleteIcon className='deleteIcon' />
                <span>Delete</span>
            </div>
        </div> : null}
    </div>
  )
}

export default TodoItem