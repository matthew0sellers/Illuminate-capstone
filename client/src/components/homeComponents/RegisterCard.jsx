import React, { useState } from 'react';
import axios from 'axios';


const SignUpCard = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event) => {
        setPass(event.target.value);
        setEmail(event.target.value);
        event.preventDefault();

        console.log('Email:', email);
        console.log('Password:', pass);
        setEmail('');
        setPass('');


    }


    return (
        <div className='seperate'>
            <p>Create an account with us to get a real Illuminate experience</p>
            <p>Enter your prefered email</p>

            <input type="email" placeholder='Email' value={email} />
            <input type="password" placeholder='Password' value={pass} />

            <button onClick={handleSubmit} className='sign-up-btn'>Sign up</button>
        </div>
    );
};

export default SignUpCard;