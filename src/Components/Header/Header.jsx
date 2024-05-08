import React from 'react'
import './Header.css'

const Header = ({children}) => {
  return (
    <header>
        <img src={require('../../Assets/Images/logo.png')} alt="" />
        {children}
    </header>
  )
}

export default Header