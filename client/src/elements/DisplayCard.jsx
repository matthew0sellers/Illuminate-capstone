import { useState, useEffect } from 'react'
import axios from "axios";
import styles from './DisplayCard.css'

const DisplayCard = () => {
  const [cardData, setCardData] = useState(['']);
  const [isOpen, setIsOpen] = useState(false);

  const {firstName, profession, state} = cardData

    axios.get(`/disp-card/data`)
      .then(response => {
        const {firstName, profession, state} = response.data
        console.log(firstName, profession, state)
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
      });


  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='dispContainer' onClick={toggleDropdown}>
      <h4>{firstName}</h4>
      <img src="https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg" />
      {isOpen && (
        <div className='dropdown'>
          <p>Profession:{profession} </p>
          <p>State: {state}</p>
          <button>View Profile</button>
        </div>
      )}
    </div>
  );
};

export default DisplayCard