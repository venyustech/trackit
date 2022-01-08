import axios from 'axios';
import React, { useState } from 'react';

import logo from '../../assets/images/logo.png'

import { Container, Input, Button, LinkStyled } from './styles';


function SignUpPage({ userInput, setUserInput }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');


  function handleSignUp(e) {
    e.preventDefault();

    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {

      email: email,
      name: name,
      image: picture,
      password: password,

    });
    promise.then(response => setUserInput(response.data))
    promise.catch(error => console.log(error.response))
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