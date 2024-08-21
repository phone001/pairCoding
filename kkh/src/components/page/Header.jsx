import React from 'react'
import { HeaderDim } from './Style';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Auth } from '../../App';
import Logout from './Logout';

const Header = () => {
  const { state: { login } } = useContext(Auth);

  if (login) {
    return <Logout></Logout>
  }
  return (
    <HeaderDim>
      {login ? "login됨" : "login안됨"}
      <Link to="/Login">로그인</Link >
      <Link to="/SignUp">회원가입</Link >
    </HeaderDim>

  )
}

export default Header
