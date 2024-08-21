import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'

const Main = () => {
  return (
    <div>
      <Body>
        {/* <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes> */}
      </Body>
    </div>
  )
}

export default Main
