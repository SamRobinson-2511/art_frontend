// import { de } from 'date-fns/locale';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Login( props ) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [viewer, setViewer] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(()=>JSON.parse(localStorage.getItem('auth')) || false)
    const setAuth = (value) => {setIsAuthenticated(value)}
    const navigate = useNavigate()

    useEffect(()=> {
        localStorage.setItem('auth', JSON.stringify(isAuthenticated))
    }, [isAuthenticated])

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', accept: 'application/json'},
            body: JSON.stringify({email: emailRef.current.value, password: passwordRef.current.value})
        })
        .then(r=>r.json())
        .then(viewer => {
            localStorage.uid = viewer.uid
            setViewer(viewer)
            navigate(`/viewer`)
        }
    )}
    
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