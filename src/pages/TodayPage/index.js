import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { BsCheckSquareFill } from 'react-icons/bs'

import { ContainerWrapper, Header, Subtitle, Title, CheckCard } from './styles';
import DateFormat from '../../components/DateFormat';

function TodayPage({ userToken }) {
    const [taskListTAM, setTaskListTAM] = useState('');
    const [taskSelectedTAM, setTaskSelectedTAM] = useState(0);
    const [taskPercentualDone, setTaskPercentualDone] = useState(0);

    const [taskListArray, setTaskListArray] = useState([]);
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
            setTaskListArray(response.data)
            setTaskListTAM(response.data.length)
            catchSelectedsNumber();
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
                console.log("removeu");
                setTaskStatus(taskStatus ? false : true);
            });
            promise.catch((error) => { console.log("error#3-TodayPage: ", error.response); });
        }
    }
    function catchSelectedsNumber() {
        if (taskListTAM !== 0) {
            const selectedsArray = []
            taskListArray.forEach(task => {
                if (task.done === true) {
                    selectedsArray.push(task.id)
                }
            })
            setTaskSelectedTAM(selectedsArray.length);
        }
        setTaskPercentualDone((taskSelectedTAM * 100) / taskListTAM)
    }

    if (taskListArray === 0) {
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
    console.log("quantidade/selecionados/percentual: ", taskListTAM, taskSelectedTAM, taskPercentualDone);

    return (
        <>
            <NavBar />
            <Header>
                <ContainerWrapper>
                    <div className="title-wrapper">
                        <Title><DateFormat />
                        </Title>
                        <Subtitle>{taskPercentualDone}% dos hábitos concluidos</Subtitle>
                    </div>

                    {taskListArray.map((task) => (

                        <div className="tasks-wrapper" key={task.id} >
                            <div className="tasks-infos">
                                <h1>{task.name}</h1>
                                <p className="current-sequence">Sequência atual: {task.currentSequence} dias</p>
                                <p className="record">Seu recorde: {task.highestSequence} dias</p>
                            </div>
                            <CheckCard isTaskChecked={task.done}>
                                <BsCheckSquareFill onClick={() => addRemeoveCheck(task.id, task.done)} ></BsCheckSquareFill>
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