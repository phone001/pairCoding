import React from 'react'
import { useContext } from 'react'
import { Auth } from '../../App'
import { HeaderDim } from './Style'

const Logout = () => {
  const { state, dispatch } = useContext(Auth)
  const handelerLogout = (e) => {
    const { login } = state;
    dispatch({ type: "logout" })

  }

  return (
    <HeaderDim>
      <span onClick={handelerLogout}>logout</span>
    </HeaderDim>
  )
}

export default Logout
