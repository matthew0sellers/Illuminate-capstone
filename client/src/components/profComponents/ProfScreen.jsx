import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayCard from '../../elements/DisplayCard'

const ProfScreen = () => {
    const [firstname, setFirstname] = useState('');
    const [profession, setProfession] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [submittedCard, setSubmittedCard] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a new dispCard object
        const newDispCard = {
            firstname,
            profession,
            contact,
            email,
            state,
        };

        // Send the POST request to the server
        axios.post('/disp-card', newDispCard)
            .then(response => {
                console.log(response.data);
                setSubmittedCard(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        // Clear the form inputs
        setFirstname('');
        setProfession('');
        setContact('');
        setEmail('');
        setState('');
    };


    return (
        <div className='container1'>
            <div className='container2'>
            <img src="https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg" style={{ minWidth: '500px' }}/>

            {submittedCard && (
                <div>
                    <h2>Submitted DispCard:</h2>
                    <p>Firstname: {submittedCard.firstname}</p>
                    <p>Profession: {submittedCard.profession}</p>
                    <p>Contact: {submittedCard.contact}</p>
                    <p>Email: {submittedCard.email}</p>
                    <p>State: {submittedCard.state}</p>
                </div>
            )}
            </div>
            <div className='container2'>
                <h2 className='text'>Create Your Display Card.</h2>

                <div >
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Firstname:</label>
                            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div>
                            <label>Profession:</label>
                            <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} />
                        </div>
                        <div>
                            <label>Contact:</label>
                            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label>State:</label>
                            <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                        </div>
                        <button type="submit">Submit for review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfScreen