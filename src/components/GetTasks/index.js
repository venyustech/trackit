import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Button, Container, TaskBox, TaskCard, TasksWrapper, Title, WeekDays } from './styles';
import { BsTrash } from 'react-icons/bs'

function GetTasks({ userToken, thereIsNewTask, setThereIsNewTask }) {
    const [taskList, setTaskList] = useState([])
    useEffect(() => {
        const promise = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }
        );

        promise.then((response) => {
            setTaskList(response.data);
            setThereIsNewTask(false);

        });

        promise.catch((error) => {
            console.log(error.response);
        });
    }, [thereIsNewTask]);

    function removeTask(id, name) {
        if (window.confirm(`Excluir o habito ${name}?`)) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                }
            );
            promise.then((response) => {
                setThereIsNewTask(true);
            });

            promise.catch((error) => {
                alert("Algo deu errado, tente novamente mais tarde");
                console.log(error.response);
            });
        }
    }

    if (thereIsNewTask === 0 || taskList.length === 0) {
        return (
            <Container>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Container>
        )
    }
    else
        return (
            <>
                <TasksWrapper>
                    <TaskCard>
                        {taskList.map((task) =>
                            <TaskBox key={task.id}>

                                <div className="infos">
                                    <Title>{task.name}</Title>
                                    <WeekDays>
                                        <Button isSelected={task.days.includes(0) ? true : false}>D</Button>
                                        <Button isSelected={task.days.includes(1) ? true : false}>S</Button>
                                        <Button isSelected={task.days.includes(2) ? true : false}>T</Button>
                                        <Button isSelected={task.days.includes(3) ? true : false}>Q</Button>
                                        <Button isSelected={task.days.includes(4) ? true : false}>Q</Button>
                                        <Button isSelected={task.days.includes(5) ? true : false}>S</Button>
                                        <Button isSelected={task.days.includes(6) ? true : false}>S</Button>
                                    </WeekDays>
                                </div>
                                <BsTrash onClick={() => removeTask(task.id, task.name)} />
                            </TaskBox>
                        )}
                    </TaskCard>
                </TasksWrapper>
            </>
        );
}

export default GetTasks;