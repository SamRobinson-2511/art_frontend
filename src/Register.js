import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'

function Register(props){
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()
    const zipCodeRef = useRef()
    const [viewer, setViewer] = useState([])
    const navigate = useNavigate()




    

    const handleSubmit = (e) => {
        e.preventDefault();
        // let newViewer = {
        //     first_name: viewerData.firstName,
        //     last_name: viewerData.lastNameRef,
        //     email: viewerData.email,
        //     password: viewerData.password,
        //     zip_code: viewerData.zipCode
        // }

        fetch( '/signup', {
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json', 
              accept: 'application/json'
             }, 
             body: JSON.stringify({
                first_name: firstNameRef.current.value, 
                last_name: lastNameRef.current.value, 
                email: emailRef.current.value,
                password: passwordRef.current.value, 
                zip_code: zipCodeRef.current.value
        })
             
            })
             .then( r => r.json())
             .then( viewer => {
                localStorage.uid = viewer.uid 
                setViewer(viewer)
                navigate(`/viewer`)
             })
        }

        
    
    return(
        <div className='auth-form-container'>
            <form className='reg-form' onSubmit={handleSubmit}>

                <label htmlFor='first-name'>first-name</label>
                <input ref={firstNameRef} type='first-name' id='first-name' />

                <label htmlFor='last-name'>last-name</label>
                <input ref={lastNameRef} type='last-name' id='last-name' />

                <label htmlFor='email'>email</label>
                <input ref={emailRef} type='email' id='email' />
                
                <label htmlFor='password'>password</label>
                <input ref={passwordRef} type='password' id='password' />

                <label htmlFor='zip-code'>zip-code</label>
                <input ref={zipCodeRef} type='zip-code' id='zip-code' />

                <button type='submit'>Sign Up</button>
                <br /> 
            </form>
            <button onClick={()=> props.onFormSwitch('login')}>Already have an account? Login</button>
        </div>
    )
}

export default Register;