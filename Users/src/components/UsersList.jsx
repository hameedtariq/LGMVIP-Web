import { Backdrop, CircularProgress } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import User from './User'
import './UsersList.css'


const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadUsers = (e)=> {
        e.preventDefault();
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get('https://reqres.in/api/users?page=1');
            if(res.status === 200){
                setUsers(res.data.data)
                setLoading(false);
            }
        }
        fetchData();
    }

    useEffect(()=> {
        
    }, [])
  return (
    <>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        >
            <CircularProgress color="secondary" />
        </Backdrop>
        {users.length ? <div className='usersList'>
            {users.map((user)=> <User {...user} key={user.id} />)}
        </div> : <div className='btn'> <button onClick={loadUsers}>Fetch Users</button> </div>
        }
    </>
  )
}

export default UsersList