import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { BsCheckSquareFill } from 'react-icons/bs'

import { ContainerWrapper, Header, Subtitle, Title } from './styles';

function TodayPage({ userToken }) {
    const [toDoList, setToDoList] = useState('')
    console.log(userToken)
    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });
        promise.then(response => handleSuccess(response));
        promise.catch(error => console.log("erro#1: ", error.response));

        function handleSuccess(response) {
            console.log(response)
            console.log("response.data:", response.data)
            setToDoList(response.data.length)
        }

    }, [toDoList])

    if (toDoList === 0) {
        console.log("items: ", toDoList)

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
                <Footer />
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


                    <div className="tasks-wrapper">
                        <div className="tasks-infos">
                            <h1>Ler 1 capítulo de livro</h1>
                            <p className="current-sequence">Sequência atual: 3 dias</p>
                            <p className="record">Seu recorde: 5 dias</p>
                        </div>
                        <div className="check-card"> <BsCheckSquareFill></BsCheckSquareFill></div>
                    </div>

                </ContainerWrapper>
            </Header>
            <Footer />
        </>
    )
}

export default TodayPage;