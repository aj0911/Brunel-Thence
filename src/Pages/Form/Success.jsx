import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const Success = () => {
    // States
    const [sec,setSec] = useState(5)
    const navigate = useNavigate();

    useEffect(()=>{
        setInterval(()=>{
            setSec(prev=>prev-1)
        },1000)
    },[])
    useEffect(()=>{
        if(sec<=0)navigate('/')
    },[sec])

  return (
    <div className="Success">
        <div className="box">
            <img src={require('../../Assets/Images/success.png')} alt="" />
            <h5>Success Submitted</h5>
            <h3>Congratulations</h3>
            <p>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
        </div>        
        <p>Redirecting you to Homepage in <span>{sec} Seconds</span></p>
    </div>
  )
}

export default Success