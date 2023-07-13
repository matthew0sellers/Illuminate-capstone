import React, { useEffect, useState } from 'react'
// import AdBanner from './AdBanner'
// import RegisterCard from '../../elements/RegisterCard'
import axios from 'axios'
// import DisplayCard from '../../elements/DisplayCard'
import Filter from '../../elements/Filter'
import styles from './DiscScreen.css'


const DisplayCard = () => {
    const [cardData, setCardData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
  
    const [FirstName, Profession, _State] = cardData
  
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
          </div>
        )}
      </div>
    );
  };


const DiscScreen = () => {
    return (
        <div className='container 1'>
            <div className='container2'>
                <h2 className='text'>Discover the Professionals you are looking for.</h2>
                <Filter/>

                <div className='display'>
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />

                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />

                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />
                    <DisplayCard />

                </div>
            </div>
        </div>
    )
}

export default DiscScreen