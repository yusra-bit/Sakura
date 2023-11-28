import { useState } from "react"

export default function Login() {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    async function login(e) {
        e.preventDefault();
        await fetch('http://loclahost:8000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: "include", 
        })

    }
    return(
        <form className="login" onSubmit={{login}}>
            <h1>Login</h1>
            <input type="text" 
                   placeholder="username"
                   value={username}
                   onChange={e => setUsername(e.target.value)} />
            <input type="password" 
                   placeholder="password"
                   value={password}
                   onChange={e => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    )
}