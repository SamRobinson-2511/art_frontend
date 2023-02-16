import { useRef } from 'react'


function NewGalleryForm(){
    const nameRef = useRef()
    const handleLogin = (e) => {
        e.preventDefault();
        fetch('/add_gallery', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', accept: 'application/json'},
            body: JSON.stringify({name: nameRef.current.value})
        })
        .then(r=>r.json())
        .then(console.log)
    }

    return(<div className='auth-form-container'>
        <form class-name='login-form' onSubmit={handleLogin} className='login-form'>

            <label htmlFor='gallery'>New Gallery</label>
            <input ref={nameRef} type='email' id='email' />
            
            <button type='submit'>Login</button>
            <br/>
        </form>
    </div>
    )

}

export default NewGalleryForm 
