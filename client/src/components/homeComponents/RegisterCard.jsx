import React, { useState } from 'react';
import axios from 'axios';


const SignUpCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newUser = {
            email,
            password,
            firstName,
            lastName,
        }

        axios
            .post('http://localhost:3002/user-sign-up', newUser)
            .then((response) => {
                console.log(response.data);
                toggleSignIn();
            })
            .catch((error) => {
                console.error('Error sending data:', error);
            });
    }


    const toggleSignIn = () => {
        setIsSignedIn(!isSignedIn);
    };

    const clearSubmit = () => {

        setEmail('');
        setPass('');
        setFirstName('');
        setLastName('');
        toggleSignIn();
    };


    return (
        <div className='seperate'>
            <p>Sign in, or create an account with us to get a real Illuminate experience</p>
            {!isSignedIn && (
                <div>
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='Password' value={password} onChange={(e) => setPass(e.target.value)} />
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