import React, { useState } from 'react'
import './Form.css'
import { RxCross2 } from "react-icons/rx"
import Header from '../../Components/Header/Header'
import { useNavigate } from 'react-router-dom'

const FormField = () => {
  // States
  const [showError,setShowError] = useState(false);
  const [user,setUser] = useState({});
  const navigate = useNavigate();

  // Function
  const handleSubmit = (e)=>{
    e.preventDefault();
    let regex = new RegExp(`[a-z0-9]+@[a-z]+\.[a-z]{2,3}`);
    if(regex.test(user.email)){
      setShowError(false)
      navigate('/Success')
    }
    else{
      setShowError(true)

    }
  }
  return (
    <div className="FormField">
      <Header>
        <div className="icon" onClick={()=>navigate('/')}>
          <RxCross2/>
        </div>
      </Header>
      <div className="box">
        <div className="heading">
          <h5>Registration Form</h5>
          <h3>Start your success Journey here!</h3>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input type="text" placeholder='Enter your name' onChange={e=>setUser({...user,name:e.target.value})} required />
          <input type="text" placeholder='Enter your email' onChange={e=>setUser({...user,email:e.target.value})}/>
          {
            showError?
            <div className="warn">
              <img src={require('../../Assets/Images/warn.png')} alt="" />
              <p>Enter a valid email address</p>
            </div>:null
          }
          <input type="submit" value={'Submit'} />
        </form>
      </div>
    </div>
  )
}

export default FormField