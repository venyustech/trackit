import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { BsCheckSquareFill } from 'react-icons/bs'

import { ContainerWrapper, Header, Subtitle, Title, CheckCard, SpanCheck, SpanRecord } from './styles';
import DateFormat from '../../components/DateFormat';
import UserContext from '../../Providers/auth';

function TodayPage() {
    const [taskListArray, setTaskListArray] = useState([]);
    const [taskStatus, setTaskStatus] = useState(false);

    const { userToken, taskPercentualDone, setTaskPercentualDone, userImage } = useContext(UserContext);

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });
        promise.then(response => handleSuccess(response));
        promise.catch(error => console.log("erro#1-TodayPage: ", error.response));

        function handleSuccess(response) {
            const newTaskListArray = response.data;
            const newTaskListTAM = response.data.length;
            setTaskListArray(response.data)
            catchSelectedsPercentual(newTaskListArray, newTaskListTAM);
        }

    }, [taskStatus])

    function addRemeoveCheck(id, status) {
        if (status === false) {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {},
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                }
            );

            promise.then((response) => {
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
    function catchSelectedsPercentual(newTaskListArray, newTaskListTAM) {
        const selectedsArray = []
        if (newTaskListTAM !== 0) {
            newTaskListArray.forEach(task => {
                if (task.done === true) {
                    selectedsArray.push(task.id)
                }
            })
        }
        const percentual = ((selectedsArray.length * 100) / newTaskListTAM).toFixed(2);
        setTaskPercentualDone(percentual);
    }
    if (taskListArray.length === 0) {
        setTaskPercentualDone(0)
        return (
            <>
                <NavBar userImage={userImage} />
                <Header>
                    <ContainerWrapper>
                        <div className="title-wrapper">
                            <Title>Não há tarefas ainda</Title>
                        </div>
                    </ContainerWrapper>
                </Header>
                <Footer taskPercentualDone={taskPercentualDone} />
            </>
        )
    }
    console.log(taskListArray)
    return (
        <>
            <NavBar userImage={userImage} />
            <Header>
                <ContainerWrapper>
                    <div className="title-wrapper">
                        <Title><DateFormat />
                        </Title>
                        <Subtitle>
                            <SpanRecord>
                                {taskPercentualDone}% dos hábitos concluidos
                            </SpanRecord>
                        </Subtitle>
                    </div>

                    {taskListArray.map((task) => (

                        <div className="tasks-wrapper" key={task.id} >
                            <div className="tasks-infos">
                                <h1>{task.name}</h1>
                                <p className="current-sequence"> Sequência atual:
                                    <SpanCheck isTaskChecked={task.done}>
                                        <SpanRecord currentSequence={task.currentSequence} highestSequence={task.highestSequence}>
                                            {task.currentSequence} dias
                                        </SpanRecord>
                                    </SpanCheck>

                                </p>
                                <p className="record">Seu recorde:
                                    <SpanRecord currentSequence={task.currentSequence} highestSequence={task.highestSequence}>
                                        {task.highestSequence} dias
                                    </SpanRecord>
                                </p>
                            </div>
                            <CheckCard isTaskChecked={task.done}>
                                <BsCheckSquareFill onClick={() => addRemeoveCheck(task.id, task.done)} ></BsCheckSquareFill>
                            </CheckCard>
                        </div>

                    ))}
                </ContainerWrapper>
            </Header>
            <Footer taskPercentualDone={taskPercentualDone} />
        </>
    )
}

export default TodayPage;