import { useState, useEffect } from 'react'
import axios from "axios";
import styles from './DisplayCard.css'

const DisplayCard = () => {
  const [cardData, setCardData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [FirstName, Profession, _State] = cardData[0]

  // const fetchDispCard = () => {
  //   axios.get(`/disp-card/data`)
  //     .then(response => {
  //       const data = response.data;
  //       setCardData(data);
  //     })
  //     .catch(error => {
  //       console.error('Error retrieving data:', error);
  //     });
  // };

  // useEffect(() => {
  //   fetchDispCard();
  // }, [])



  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='dispContainer' onClick={toggleDropdown}>
      <h4>{FirstName}</h4>
      <img src="https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg" />
      {isOpen && (
        <div className='dropdown'>
          <p>Profession:{Profession} </p>
          <p>State: {_State}</p>
          <button>View Profile</button>
        </div>
      )}
    </div>
  );
};

export default DisplayCard