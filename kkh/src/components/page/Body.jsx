import React from 'react'
import { BodyDim } from './Style'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'



const Body = () => {
  return (
    <BodyDim>

      <Login />
      <SignUp />

    </BodyDim>
  )
}

export default Body
