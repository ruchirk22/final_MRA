import React, {useEffect, useState} from 'react'
import { listUsers } from '../services/UserService'
import { useNavigate } from 'react-router-dom'

const ListUserComponent = () => {

    const [users, setUsers] =  useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.error(error);
        })

    }, [])

    function addNewUser(){
        navigator('/register')
    }
    
  return (
    <div className='container'>
      <h2 className='text-center'>List of Users</h2>
      <button className='btn btn-primary mb-2' onClick={addNewUser}>Add User</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>User ID</th>
                <th>User First Name</th>
                <th>User Last Name</th>
                <th>User Email ID</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListUserComponent
