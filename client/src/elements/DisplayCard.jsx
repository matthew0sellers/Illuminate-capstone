import { useState, useEffect } from 'react'
import axios from "axios";
import styles from './DisplayCard.css'

const DisplayCard = () => {

  const card = () => {
    fetch('/random-card')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  


const [isOpen, setIsOpen] = useState(false)

const toggleDropdown = () => {
  setIsOpen(!isOpen)
}

return (
  <div className='dispContainer' onClick={toggleDropdown}>
    <h4>{card.FirstName}</h4>
    <img src="https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg" />
    {isOpen && (
      <div className='dropdown'>
        <p>Profession:{card.Profession} </p>
        <p>State: {card._State}</p>
      </div>
    )}
  </div>
);
};

export default DisplayCard