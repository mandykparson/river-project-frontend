import React from 'react'
import { useState } from 'react'

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event => {
        event.preventDefault();

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({user: {username, password}})
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <input
                type="text"
                name="password"
                placeholder="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <input type="submit" value="login" />
        </form>
    )
}
