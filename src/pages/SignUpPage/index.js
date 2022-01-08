import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png'

import { Container, Title, Input, Button, LinkStyled } from './styles';


function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [picture, setPicture] = useState('')

  function handleSignUp(e) {
    e.preventDefault();
    // const promise = axios.post('link-aqui', {
    //   name,
    //   email,
    //   password,
    // });
    // promise.then(response => console.log(response))
    // promise.catch(error => console.log(error.response))
    console.log("entrei")
  }
  return (
    <Container>
      <img src={logo} alt="logo TrackIt" />
      <form onSubmit={handleSignUp}>

        <Input type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
        />
        <Input type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="senha"
        />
        <Input type="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="nome"
        />
        <Input type="url"
          onChange={(e) => setPicture(e.target.value)}
          value={picture}
          placeholder="foto"
        />

        <Button onClick={() => alert(email)}>Enter</Button>

      </form>
      <LinkStyled to="/">Já possui conta? Faça login.</LinkStyled>

    </Container>
  );
}

export default SignUpPage;