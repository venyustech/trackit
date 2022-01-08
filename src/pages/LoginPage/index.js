// import axios from 'axios';
import React, { useState } from 'react';

import logo from '../../assets/images/logo.png'


import { Container, Input, Button, LinkStyled } from './styles';

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault();
        //const promise = axios.post('link-aqui', {
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

            <form onSubmit={handleLogin}>
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

                <Button onClick={() => console.log("entrou")}>Enter</Button>
            </form>

            <LinkStyled to="/sign-up">Não tem uma conta? Cadastre-se!</LinkStyled>
        </Container>
    );
}



export default LoginPage;