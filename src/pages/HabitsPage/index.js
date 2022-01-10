import React, { useContext, useState } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { SiAddthis } from 'react-icons/si'

import { Container, Header, Input, SetNewHabits, Buttons, ButtonsSubmit, ButtonDay, SetTaks } from './styles';
import axios from 'axios';
import GetTasks from '../../components/GetTasks';
import UserContext from '../../Providers/auth';

function HabitsPage() {
    const { userToken, taskPercentualDone, userImage } = useContext(UserContext);
    const [thereIsNewTask, setThereIsNewTask] = useState(1);
    const [newHabitDisplay, setNewHabitDisplay] = useState('');

    const [newHabitTitle, setNewHabitTitle] = useState('');
    const [weekDaysArray, setWeekDaysArray] = useState([])
    const [quantityOfDaysSelecteds, setQuantityOfDaysSelecteds] = useState(0);

    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");


    function handleNewHabits(e) {
        e.preventDefault();

        setIsLoading(true)
        setInputLoading("disabled")

        const newTask = {
            name: newHabitTitle,
            days: weekDaysArray,
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            newTask,
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }
        );
        promise.then(response => handleSuccess(response));
        promise.catch(error => handleError(error.response));

        function handleSuccess(response) {
            setThereIsNewTask(true);
            setIsLoading(false);
            resetDisplay();
            setInputLoading("")
        }

        function handleError(response) {
            setIsLoading(false);
            alert("tenta de novo boy, deu erro!");
            setInputLoading("")

        }
    }
    function resetDisplay() {
        setWeekDaysArray([]);
        setQuantityOfDaysSelecteds(0);
        setNewHabitTitle('');
        setNewHabitDisplay(false);
    }
    function addNewDay(daySelected) {
        if (weekDaysArray.includes(daySelected)) {
            let indexOfDaySelected = weekDaysArray.indexOf(daySelected);
            weekDaysArray.splice(indexOfDaySelected, 1);
            setQuantityOfDaysSelecteds(quantityOfDaysSelecteds - 1);
        }
        else {
            setWeekDaysArray([...weekDaysArray, daySelected]);
            setQuantityOfDaysSelecteds(quantityOfDaysSelecteds + 1);
        }
    }

    return (
        <>
            <NavBar userImage={userImage} />
            <Header>
                <div className="habits-wrapper">
                    <h1>Meus Habitos</h1>
                    <SiAddthis onClick={() => newHabitDisplay ? setNewHabitDisplay(false) : setNewHabitDisplay(true)} />
                </div>
            </Header>
            <Container>
                <SetNewHabits newHabitDisplay={newHabitDisplay}>
                    <form onSubmit={handleNewHabits}>
                        <Input type="text"
                            disabled={inputLoading}
                            placeholder="nome do hábito"
                            onChange={(e) => setNewHabitTitle(e.target.value)}
                            value={newHabitTitle}
                        />
                        <Buttons>
                            <ButtonDay type="button" disabled={inputLoading} onClick={() => addNewDay(0)} isSelected={weekDaysArray.includes(0) ? true : false}>D</ButtonDay>
                            <ButtonDay type="button" disabled={inputLoading} onClick={() => addNewDay(1)} isSelected={weekDaysArray.includes(1) ? true : false}>S</ButtonDay>
                            <ButtonDay type="button" disabled={inputLoading} onClick={() => addNewDay(2)} isSelected={weekDaysArray.includes(2) ? true : false}>T</ButtonDay>
                            <ButtonDay type="button" disabled={inputLoading} onClick={() => addNewDay(3)} isSelected={weekDaysArray.includes(3) ? true : false}>Q</ButtonDay>
                            <ButtonDay type="button" disabled={inputLoading} onClick={() => addNewDay(4)} isSelected={weekDaysArray.includes(4) ? true : false}>Q</ButtonDay>
                            <ButtonDay type="button" disabled={inputLoading} onClick={() => addNewDay(5)} isSelected={weekDaysArray.includes(5) ? true : false}>S</ButtonDay>
                            <ButtonDay type="button" disabled={inputLoading} onClick={() => addNewDay(6)} isSelected={weekDaysArray.includes(6) ? true : false}>S</ButtonDay>
                        </Buttons>
                        <ButtonsSubmit>
                            <button type="reset" onClick={() => setNewHabitDisplay(false)} className="cancel">Cancelar</button>
                            <button className="confirm">{isLoading ? "Loading..." : "Entrar"}</button>
                        </ButtonsSubmit>

                    </form>
                </SetNewHabits>
                <SetTaks>
                    <GetTasks userToken={userToken} thereIsNewTask={thereIsNewTask} setThereIsNewTask={setThereIsNewTask} />
                </SetTaks>

            </Container>
            <Footer taskPercentualDone={taskPercentualDone} />

        </>
    );
}

export default HabitsPage;