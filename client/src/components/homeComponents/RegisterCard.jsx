import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SignUpCard = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false)

    const handleSubmit = (e) => {
        const newUser = {
            email,
            pass,
            firstName,
            lastName,
        }

        axios.post('http://localhost:3002/user-sign-up', newUser)
            .then(response => {
                console.log(response.data);
            })

        const toggleSignIn = (e) => {
            setIsSignedIn(!isSignedIn)
        }

        toggleSignIn()
    }

    const clearSubmit = (e) => {
        const toggleSignIn = (e) => {
            setIsSignedIn(!isSignedIn)

            setEmail('');
            setPass('');
            setFirstName('');
            setLastName('');
        }

        toggleSignIn()
    }

    return (
        <div className='seperate'>
            <p>Sign in, or create an account with us to get a real Illuminate experience</p>
            {!isSignedIn && (
                <div>
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />

                    <button onClick={handleSubmit} className='sign-up-btn'>Sign in</button>
                </div>
            )}

            {isSignedIn && (
                <div>
                    <p>Welcome to Illuminate {firstName}</p>
                    <button onClick={clearSubmit} className='sign-up-btn'> Sign out</button>
                </div>
            )}
        </div>
    );
};

export default SignUpCard;