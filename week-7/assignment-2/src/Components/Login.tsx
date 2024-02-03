import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response  = await fetch('http://localhost:3000/auth/login', {
            methdos: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password})
        });

        const data  = await response.json();
        if (data,token) {
            localStorage.setItem("token", data.token)
            window.location = "/todos";
        } else {
            alert("invalid credentials");
        }
    };
    return (
        <div style={{justifyContent: "center", display: "flex", width: "100%"}}>
            <div>
                <h2>Login</h2>
                <input type='text' vlaue={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                New here? <Link to="/signup">Signup</Link>
                <button onCLikc={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;