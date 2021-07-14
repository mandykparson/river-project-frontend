import { useState } from 'react'


export default function Signup(props) {
    const [ username, setUsername ] = useState('');    
    const [ password, setPassword ] = useState('');   

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('username', username);
        console.log('password', password);

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({user: {username, password}})
        })
            .then(response => response.json())
            .then(newUser => console.log(newUser))
    }
 
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => {props.setButtonPopup(!props.trigger)}}>X</button>
                { props.children }
                <form onSubmit={ handleSubmit }>
                    <input 
                        type="text"
                        name="username" 
                        value={username}
                        placeholder="username"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <input 
                        type="password"
                        name="password" 
                        value={password}
                        placeholder="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        </div>
    ) : "";
}