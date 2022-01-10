import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { BsCheckSquareFill } from 'react-icons/bs'

import { ContainerWrapper, Header, Subtitle, Title, CheckCard } from './styles';
import DateFormat from '../../components/DateFormat';

function TodayPage({ userToken }) {
    const [toDoListTAM, setToDoListTAM] = useState('');
    const [tasksSelectedTAM, setTasksSelectedTAM] = useState(0);

    const [toDoListArray, setToDoListArray] = useState([]);
    const [taskStatus, setTaskStatus] = useState(false);

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });
        promise.then(response => handleSuccess(response));
        promise.catch(error => console.log("erro#1-TodayPage: ", error.response));

        function handleSuccess(response) {
            setToDoListArray(response.data)
            setToDoListTAM(response.data.length)
        }

    }, [taskStatus])

    function handleTaskStatus(id, status) {
        if (status === false) {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {},
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                }
            );

            promise.then((response) => {
                console.log("adicionou");
                console.log(response);
                setTaskStatus(taskStatus ? false : true);
            });
            promise.catch((error) => console.log("error#2-TodayPage: ", error.response));
        }
        else {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {},
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                }
            );

            promise.then((response) => {
                setTaskStatus(taskStatus ? false : true);
            });
            promise.catch((error) => { console.log("error#3-TodayPage: ", error.response); });
        }
    }

    if (toDoListArray === 0) {
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
    console.log("toDoListArray:", toDoListArray);
    console.log("tasksSelectedTAM: ", tasksSelectedTAM)
    console.log("setToDoListTAM:", toDoListTAM);

    return (
        <>
            <NavBar />
            <Header>
                <ContainerWrapper>
                    <div className="title-wrapper">
                        <Title><DateFormat />
                        </Title>
                        <Subtitle>Nenhum hábito concluído ainda</Subtitle>
                    </div>

                    {toDoListArray.map((task) => (

                        <div className="tasks-wrapper">
                            <div className="tasks-infos">
                                <h1>{task.name}</h1>
                                <p className="current-sequence">Sequência atual: {task.currentSequence} dias</p>
                                <p className="record">Seu recorde: {task.highestSequence} dias</p>
                            </div>
                            <CheckCard isTaskChecked={task.done}>
                                <BsCheckSquareFill onClick={() => handleTaskStatus(task.id, task.done)} ></BsCheckSquareFill>
                            </CheckCard>
                        </div>

                    ))}
                </ContainerWrapper>
            </Header>
            <Footer />
        </>
    )
}

export default TodayPage;