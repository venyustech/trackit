import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Loader from "react-loader-spinner";

import logo from '../../assets/images/logo.png'
import { Container, Input, Button, LinkStyled, Loading } from './styles';
import UserContext, { useAuth } from '../../Providers/auth';

function LoginPage() {

    const { setUserToken, setUserImage } = useContext(UserContext)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");



    function handleLogin(e) {
        e.preventDefault();

        setIsLoading(true);
        setInputLoading("disabled")

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email: email,
            password: password,
        });
        promise.then(response => {
            setUserToken(response.data.token);
            setUserImage(response.data.image)
            setIsLoading(false);
            setInputLoading("");
            navigate('/hoje');

        })
        promise.catch((error) => {
            console.log(error.response);
            alert("Tenta de novo. Dados incorreto");
            setIsLoading(false)
            setInputLoading("")
        })
    }
    return (
        <Container>
            <img src={logo} alt="logo TrackIt" />

            <form onSubmit={handleLogin}>
                <Input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="email"
                    disabled={inputLoading}
                />

                <Input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="senha"
                    disabled={inputLoading}
                />

                <Button>{isLoading ?
                    (<Loader
                        type="ThreeDots"
                        color="#FFFFFF"
                        height={80}
                        width={80}

                    />) : ("entrar")}
                </Button>
            </form>

            <LinkStyled to="/cadastro">Não tem uma conta? Cadastre-se!</LinkStyled>
        </Container>
    );
}



export default LoginPage;