import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
    const navigate=new useNavigate();

    const search=()=>{
        navigate('/dashboard');
    }
  return (
    <div onClick={search} className='landingPage'>
      
    </div>
  )
}

export default LandingPage
