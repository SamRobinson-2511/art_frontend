// import { de } from 'date-fns/locale';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'

function Login( props ) {
    const emailRef = useRef()
    const passwordRef = useRef()
    

    const handleLogin = (e) => {
        e.preventDefault();
        console.log()
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', accept: 'application/json'},
            body: JSON.stringify({email: emailRef.current.value, password: passwordRef.current.value})
        })
        .then(r=>r.json())
        .then(console.log)
    }

    
    return (
        <div className='auth-form-container'>
                <form class-name='login-form' onSubmit={handleLogin} className='login-form'>

                    <label htmlFor='email'>email</label>
                    <input ref={emailRef} type='email' id='email' />
                    
                    <label htmlFor='email'>password</label>
                    <input ref={passwordRef} type='password' id='password' />
                    <br/>
                    <button type='submit'>Login</button>
                    <br/>
                </form>
                <button onClick={()=> props.onFormSwitch('register')}>Don't have an account? Register</button>
            </div>
    )
}

export default Login;