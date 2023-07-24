import React, { useEffect, useState } from 'react'
// import AdBanner from './AdBanner'
// import RegisterCard from '../../elements/RegisterCard'
import axios from 'axios'
import SignUpCard from './RegisterCard'


const HomeScreen = () => {

    return (
        <div className='container'>
            <div className='column'> 
                <h4>Mission Statement</h4>
                <p>Here at Illuminate we back
                small business owners.
                We want to provide a
                workspace where
                professionals can find other
                skilled individuals, who share
                similar goals and passions.
                We hope to help facilitate
                collaboration.</p>
                <img
                    src='https://cdn.vectorstock.com/i/1000x1000/17/52/professional-workers-different-jobs-professionals-vector-31651752.webp'
                    alt='Image'
                    className='img-container' />
                </div>


            <div className='column2'>
                <SignUpCard/>
                <div className='seperate'>
                <h4>Check out our pros on
                    the Discoveries page</h4>
               
                <h4>Have an idea but lacking
                    technical skills? Put a
                    post on Requests</h4>
                    </div>
                    
            </div>
        </div>
    )
}

export default HomeScreen