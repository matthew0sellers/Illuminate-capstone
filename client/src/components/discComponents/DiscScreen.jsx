import React, { useEffect, useState } from 'react'
// import AdBanner from './AdBanner'
// import RegisterCard from '../../elements/RegisterCard'
import axios from 'axios'
import DisplayCard from '../../elements/DisplayCard'
import Filter from '../../elements/Filter'
import styles from './DiscScreen.css'


const DiscScreen = () => {
  // const fetchDataByState = () => {
  //   axios.get(`/disp/${state}`)
  //     .then(response => {
  //       const filteredData = response.data;
  //       console.log(filteredData);
  //     })
  //     .catch(error => {
  //       console.error('Error retrieving data:', error);
  //     });
  // };

  return (
    <div className='container 1'>
      <div className='container2'>
        <h2 className='text'>Discover the Professionals you are looking for.</h2>
        <Filter />

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