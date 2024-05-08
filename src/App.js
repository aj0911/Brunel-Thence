import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import FormField from './Pages/Form/FormField'
import Success from './Pages/Form/Success'

const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Form' element={<FormField/>}/>
            <Route path='/Success' element={<Success/>}/>
        </Routes>
    </div>
  )
}

export default App