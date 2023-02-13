import React, { useState } from 'react';

function Login(props){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    

    const handleLogin = (e) => {
        e.preventDefault();

    }
    
    return (
        <div className='auth-form-container'>
                <form class-name='login-form' onSubmit={handleLogin} className='login-form'>
                    <label htmlFor='email'>email</label>
                    <input type='email' placeholder='what@yremail.com' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor='email'>password</label>
                    <input type='password' placeholder='make me at least 8 chars with symbols' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit'>Login</button>
                </form>
                <button onClick={()=> props.onFormSwitch('register')}>Don't have an account? Register</button>
            </div>
    )
}

export default Login