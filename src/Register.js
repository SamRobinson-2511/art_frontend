import React, { useState } from 'react';



function Register(props){
    const [first_name, set_first_name] = useState('')
    const [last_name, set_last_name] = useState('')
    const [password, setPassword] = useState('')
    const [email, set_email] = useState('')
    const [zip_code, set_zip_code] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();
        fetch( '/register', {
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json', 
              accept: 'application/json'
             }, 
             body: JSON.stringify({
                first_name: set_first_name, 
                last_name: set_last_name, 
                email: set_email, 
                password: setPassword, 
                zip_code: set_zip_code,
                passwordConfirmation: setPasswordConfirmation
             })
            })
             .then( r => r.json())
             .then( viewer => localStorage.uid = viewer.uid )
    }
    
    return(
        <div className='auth-form-container'>
            <form className='reg-form' onSubmit={handleSubmit}>
                <label htmlFor='first-name'>first-name</label>
                <input value={first_name} name='first-name' id='first-name' placeholder='first-name' onChange={(e) => set_first_name(e.target.value)}/>

                <label>last-name</label>
                <input value={last_name} name='last-name' id='last-name' placeholder='last-name' onChange={(e) => set_last_name(e.target.value)}/>

                <label htmlFor='email'>email</label>
                <input type='email' placeholder='what@yremail.com' id='email' name='email' value={email} onChange={(e) => set_email(e.target.value)}/>
                
                <label htmlFor='password'>password</label>
                <input value={password} name='password' id='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>

                <label htmlFor='zip-code'>zip-code</label>
                <input value={zip_code} name='zip-code' id='zip-code' placeholder='zip-code' onChange={(e)=>set_zip_code(e.target.value)}/>

                <label htmlFor='password-confirmation'>password-confirmation</label>
                <input value={passwordConfirmation} name='password-confirmation' id='password-confirmation' placeholder='password-confirmation' onChange={(e)=>setPasswordConfirmation(e.target.value)}/>
                <button type='submit'>Sign Up</button>
            </form>
            <button onClick={()=> props.onFormSwitch('login')}>Already have an account? Login</button>
        </div>
    )
}

export default Register;