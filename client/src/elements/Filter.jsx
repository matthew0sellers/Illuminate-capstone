import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './DisplayCard.css';


const Filter = () => {
  const [state, setState] = useState('');
  const [prof, setProf] = useState('');

  const stateArr = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  const professions = [ 'Accountant', 'Architect', 'Baker', 'Carpenter', 'Chef', 'Consultant', 'Electrician', 'Event Planner', 'Fitness Trainer', 'Graphic Designer', 'Hair Stylist', 'Interior Designer', 'Landscaper', 'Photographer', 'Plumber', 'Real Estate Agent', 'Social Media Manager', 'Web Developer'];

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);
    console.log(selectedState)
  };

  const handleProfChange = (event) => {
    const selectedProf = event.target.value;
    setProf(selectedProf);
    console.log(selectedProf)
  };

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
    <div className='searchCont'>
      <select name='state' value={state} onChange={handleStateChange}>
        <option value=''>Select your state</option>
        {stateArr.map((stateValue, index) => (
          <option key={index} value={stateValue}>
            {stateValue}
          </option>
        ))}
      </select>
      <select name='profession' value={prof} onChange={handleProfChange}>
        <option value=''>Select a profession</option>
        {professions.map((profession, index) => (
          <option key={index} value={profession}>
            {profession}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter