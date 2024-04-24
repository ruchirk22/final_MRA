import React, { useState } from 'react'
import { createuser } from '../services/UserService'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const navi = useNavigate();

    const [errors, seterrors] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })

    function handlefirstname(e){
        setfirstname(e.target.value);
    }

    function handlelastname(e){
        setlastname(e.target.value);
    }

    function handleemail(e){
        setemail(e.target.value);
    }

    function saveuser(e){
        e.preventDefault();
        
        if(validateform()){
            const user = {firstname, lastname, email}
            console.log(user)

        createuser(user).then((Response) => {
                console.log(Response.data);
                navi('/users')
            }
            )
        }
        
    }

    function validateform(){
        let valid = true;

        const errorsCopy = {... errors}

        if(firstname.trim()){
            errorsCopy.firstname= '';
        } else {
                errorsCopy.firstname = 'First Name is required';
                valid = false;
        }

        if(lastname.trim()){
            errorsCopy.lastname = '';
        } else {
            errorsCopy.lastname = 'Last Name is required';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
        }

        seterrors(errorsCopy)

        return valid;
    }


  return (
    <div className='container'> 
    <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Register</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input 
                            type='text'
                            placeholder='First Name'
                            name='firstname'
                            value={firstname}
                            className={`form-control ${errors.firstname ?'is-invalid':''}`}
                            onChange={handlefirstname}
                            ></input>
                            { errors.firstname && <div className='invalid-feedback'>{errors.firstname} </div>}
                            </div>
                        
                        
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input 
                            type='text'
                            placeholder='Last Name'
                            name='lastname'
                            value={lastname}
                            className={`form-control ${errors.lastname ?'is-invalid':''}`}
                            onChange={handlelastname}
                            ></input>
                            { errors.lastname && <div className='invalid-feedback'>{errors.lastname} </div>}
                        </div>
                        
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input 
                            type='text'
                            placeholder='Email'
                            name='email'
                            value={email}
                            className={`form-control ${errors.email ?'is-invalid':''}`}
                            onChange={handleemail}
                            ></input>
                            { errors.email && <div className='invalid-feedback'>{errors.email} </div>}
                        </div>
                        <br />
                        <button className='btn btn-success' onClick={saveuser}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
