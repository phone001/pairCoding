import React, { useContext } from 'react'
import { Input, Label, Button, Form, InputDiv, BodyDim } from './Style'
import { Auth } from '../../App'

const Login = () => {
  const { state, dispatch } = useContext(Auth)
  const handlerLogin = (e) => {
    e.preventDefault()
    const { users, login } = state;
    const { uid, upw } = e.target;
    const data = users.find(e => e.uid === uid.value && e.upw === upw.value)
    if (data) {
      dispatch({ type: "login", payload: { login: true } })

    } else {
      alert("계정 다시 확인 바람")
    }
  }

  return (
    <BodyDim>
      <Form onSubmit={handlerLogin}>
        <InputDiv>
          <Label>아이디</Label>
          <Input type="text" name="uid"></Input>
        </InputDiv>

        <InputDiv>
          <Label>비밀번호</Label>
          <Input type="password" name="upw"></Input>
        </InputDiv>

        <InputDiv>
          <Button>Login</Button>
        </InputDiv>
      </Form>
    </BodyDim>
  )
}

export default Login
