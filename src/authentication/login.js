import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/login', { email, password })
            .then(response => {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('token', response.data.token);
                window.location.href = '/dashboard';
            })
            .catch(error => {
                console.log(error.response.data.message);
            });
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder="Type your email..." value={email} onChange={event => setEmail(event.target.value)} />
            <label htmlFor='password'>Password</label>
            <input type="password" placeholder="Type your password..." value={password} onChange={event => setPassword(event.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
