import React from 'react'
import { useContext } from 'react'
import { Auth } from '../../App'
import { Input, Label, Button, Form, InputDiv, BodyDim } from './Style'


const SignUp = () => {
  const { state, dispatch } = useContext(Auth);
  const handelrSignup = (e) => {
    e.preventDefault()
    const { users } = state;
    const { uid, upw } = e.target;
    const user = { uid: uid.value, upw: upw.value }
    dispatch({ type: "signup", payload: { user } })
  }

  return (
    <BodyDim>
      <Form onSubmit={handelrSignup}>
        <InputDiv>
          <Label>아이디</Label>
          <Input type="text" name="uid"></Input>
        </InputDiv>

        <InputDiv>
          <Label>비밀번호</Label>
          <Input type="password" name="upw"></Input>
        </InputDiv>

        <InputDiv>
          <Button>회원가입</Button>
        </InputDiv>
      </Form>
    </BodyDim>
  )
}

export default SignUp
