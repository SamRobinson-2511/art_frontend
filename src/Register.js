import React, { useState } from 'react';



function Register(props){
    const [first_name, set_first_name] = useState('')
    const [last_name, set_last_name] = useState('')
    const [password_digest, set_password_digest] = useState('')
    const [email, set_email] = useState('')
    const [zip_code, set_zip_code] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        fetch( '/new_viewer', {
            method: 'POST', 
            headers: { 
              'Content-Type': 'application/json', 
              Accept: 'application/json'
             }, 
             body: JSON.stringify({first_name: '', last_name: '', email: '', password_digest: '', zip_code: ''
             })
            })
             .then( r => r.json())
             .then( viewer => localStorage.uid = viewer.uid )
    }
    
    return(
        <div className='auth-form-container'>
            <form className='reg-form' onSubmit={handleSubmit}>
                <label htmlFor='firstname'>firstname</label>
                <input value={first_name} name='firstname' id='firstname' placeholder='firstname' onChange={(e) => set_first_name(e.target.value)}/>

                <label>lastname</label>
                <input value={last_name} name='lastname' id='lastname' placeholder='lastname' onChange={(e) => set_last_name(e.target.value)}/>

                <label htmlFor='email'>email</label>
                <input type='email' placeholder='what@yremail.com' id='email' name='email' value={email} onChange={(e) => set_email(e.target.value)}/>
                
                <label htmlFor='password'>password</label>
                <input value={password_digest} name='password' id='password' placeholder='password' onChange={(e)=>set_password_digest(e.target.value)}/>

                <label htmlFor='zipcode'>password</label>
                <input value={zip_code} name='zipcode' id='zipcode' placeholder='zipcode' onChange={(e)=>set_zip_code(e.target.value)}/>

                <button type='submit'>Sign Up</button>
            </form>
            <button onClick={()=> props.onFormSwitch('login')}>Already have an account? Login</button>
        </div>
    )
}

export default Register;