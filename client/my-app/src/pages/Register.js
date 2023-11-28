import { useState } from 'react';
export default function Register() {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    async function register(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type':'application/json' },
        });
        if(response.status === 200) {
            alert('registration successful');
        } else {
            alert('register failed');
        }
    }
    return(
        <form className='register' onSubmit={register}>
            <h1>Register</h1>
            <input type="text" 
                   placeholder="username"
                   value={username}
                   onChange={e => setUsername(e.target.value)} />
            <input type="password"
                   placeholder="password"
                   value={password} 
                   onChange={e => setPassword(e.target.value)} />
            <button>Register</button>
        </form>
    )
}