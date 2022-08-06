import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import SortIcon from '@mui/icons-material/Sort';
import './TodoList.css'
import DateTime from './DateTime';
import Navbar from './Navbar';

const savedtasks = [
    {
        _id: 0,
        completed: false,
        text: "Play Piano",
        pinned: false,
    },
    {
        _id: 1,
        completed: false,
        text: "Play Piano",
        pinned: true,
    }
]

const TodoList = () => {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    useEffect(()=> {
        const storedTasks = localStorage.getItem('tasks');
        if(storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, [])
    useEffect(()=> {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])
    // const [pinnedTasks, setPinnedTasks] = useState(savedtasks.filter((task)=> task.pinned)); 
    const updateTask = (id, task)=> {
        setTasks(prev => {
            const prevArray =new Array(...prev);
            prevArray[prevArray.findIndex(item => id == item._id)] = task;
            return prevArray;
        })
    }
    const deleteTask = (id)=> {
        setTasks(prev => prev.filter((item)=> item._id != id));
    }
    const addTask = (e)=> {
        if(e.key === 'Enter'){
            setTasks(prev => {
                const newArray = new Array(...prev);
                newArray.push({
                    _id: prev.length,
                    completed: false,
                    text: newTask,
                });
                return newArray;
            })
            setNewTask('');
        }
    }
 
  return (
    <div className='todoContainer'>
        
            
            <div className="todo">
            <Navbar />
            <div className="todowrapper">
                <DateTime />
                <div className='addTask'>
                    <SortIcon className='listIcon'/> <input value={newTask} placeholder='Add a task...' onChange={(e)=> setNewTask(e.target.value)} onKeyUp={addTask} />
                </div>
                

                
                <div className="list">
                    {tasks.filter((task)=> task.pinned).map((task)=><TodoItem key={task._id} {...task } updateTask = {updateTask} deleteTask = {deleteTask}/>)}
                    {tasks.filter((task)=> task.pinned).length > 0 ? <hr style={{borderColor: "#2f343a"}}></hr> : null}
                    {tasks.filter((task)=> !task.pinned).map((task)=><TodoItem key={task._id} {...task } updateTask = {updateTask} deleteTask = {deleteTask}/>)}
                    
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default TodoList