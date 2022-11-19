import React, { useEffect  } from 'react'
import { useHistory } from 'react-router-dom';
import './Landing.css'
import img from '../assets/327601.jpg'


function Landing() {

    const history = useHistory();
  
  useEffect(() => {
    setTimeout(() => {
      history.push('/home')
    }, 3500)
  })

  return (
    <img src={img} alt='Games Page' /> 
  )
}

export default Landing