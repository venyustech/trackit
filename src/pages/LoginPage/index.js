import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import logo from '../../assets/images/logo.png'
import { Container, Input, Button, LinkStyled } from './styles';

function LoginPage({ setUserToken }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    function handleLogin(e) {
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email: email,
            password: password,
        });
        promise.then(response => handleSuccess(response.data))
        promise.catch(error => alert("Tenta de novo, boy. Tem certeza que tu tem conta?"))
    }

    function handleSuccess(answer) {
        setUserToken(answer.token);
        navigate('/hoje')
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

                <Button>Enter</Button>
            </form>

            <LinkStyled to="/cadastro">Não tem uma conta? Cadastre-se!</LinkStyled>
        </Container>
    );
}



export default LoginPage;