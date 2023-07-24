import { useState, useEffect } from 'react'
import axios from "axios";
import styles from './DisplayCard.css'

const DisplayCard = () => {
  const [cardData, setCardData] = useState({firstname:'', profession:'', _state:''});
  const [isOpen, setIsOpen] = useState(false);

  const getCardData = () => {
    axios.get(
      'http://localhost:3002/disp-card/data'
      )
      .then(response => {
        setCardData(response.data)
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
      });   
    }

    useEffect(() => 
      getCardData(), [])

    console.log(cardData)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='dispContainer' onClick={toggleDropdown}>
      <h4>{cardData.firstname}</h4>
      <img src="https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg" />
      {isOpen && (
        <div className='dropdown'>
          <p>Profession: {cardData.profession} </p>
          <p>State: {cardData._state}</p>
          <button>View Profile</button>
        </div>
      )}
    </div>
  );
};

export default DisplayCard