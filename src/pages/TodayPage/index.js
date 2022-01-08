import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

import { ContainerWrapper, Header, Subtitle, Title } from './styles';

function TodayPage({ userToken }) {
    const [items, setItems] = useState('')

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });
        promise.then(response => handleSuccess(response));
        promise.catch(error => console.log(error.response));

        function handleSuccess(response) {
            console.log("token: ", userToken)
            console.log("response.data.length: ", response.data.length)
            setItems(response.data.length)
        }

    }, [userToken])

    if (items === 0) {
        console.log("items: ", items)

        return (
            <>
                <NavBar />
                <Header>
                    <ContainerWrapper>
                        <div className="title-wrapper">
                            <Title>Não há tarefas ainda</Title>
                        </div>

                    </ContainerWrapper>
                </Header>
            </>
        )
    }

    return (
        <>
            <NavBar />
            <Header>
                <ContainerWrapper>
                    <div className="title-wrapper">
                        <Title>Segunda, 17/05</Title>
                        <Subtitle>Nenhum hábito concluído ainda</Subtitle>
                    </div>
                </ContainerWrapper>
                <Footer />
            </Header>
        </>
    )
}

export default TodayPage;