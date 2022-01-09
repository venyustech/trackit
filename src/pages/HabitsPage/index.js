import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { SiAddthis } from 'react-icons/si'

import { Container, Header, Input, SetNewHabits, Buttons, ButtonsSubmit, ButtonDay, SetTaks } from './styles';
import axios from 'axios';
import ListHabits from '../../components/ListHabits';

function HabitsPage({ userToken }) {
    const [thereIsHabits, setThereIsHabits] = useState(false);
    const [newHabitDisplay, setNewHabitDisplay] = useState(false);

    const [newHabitTitle, setNewHabitTitle] = useState('');
    const [weekDaysArray, setWeekDaysArray] = useState([])
    const [quantityOfDaysSelecteds, setQuantityOfDaysSelecteds] = useState(0);

    function handleNewHabits(e) {
        alert("entrou no alerta")
        e.preventDefault();

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
            setThereIsHabits(true);
            resetDisplay();
            console.log("token: ", userToken)
            console.log("response:", response)
            console.log("response.data.length: ", response.data.length)
            alert("enviou com sucesso")
        }

        function handleError(response) {
            resetDisplay();
            alert("tenta de novo boy, deu erro!");
        }
    }

    function resetDisplay() {
        setWeekDaysArray([]);
        setQuantityOfDaysSelecteds(0);
        setNewHabitTitle('');
        setNewHabitDisplay(false);
    }
    function addNewDay(daySelected) {
        //se já foi insediro, exclui
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
    console.log("newHabitTitle:", newHabitTitle)
    console.log("newHabitDay:", weekDaysArray)
    console.log("userToken: ", userToken)


    return (
        <>
            <NavBar />
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
                            placeholder="nome do hábito"
                            onChange={(e) => setNewHabitTitle(e.target.value)}
                            value={newHabitTitle}
                        />
                        <Buttons>
                            <ButtonDay type="button" onClick={() => addNewDay(7)} isSelected={weekDaysArray.includes(7) ? true : false}>D</ButtonDay>
                            <ButtonDay type="button" onClick={() => addNewDay(1)} isSelected={weekDaysArray.includes(1) ? true : false}>S</ButtonDay>
                            <ButtonDay type="button" onClick={() => addNewDay(2)} isSelected={weekDaysArray.includes(2) ? true : false}>T</ButtonDay>
                            <ButtonDay type="button" onClick={() => addNewDay(3)} isSelected={weekDaysArray.includes(3) ? true : false}>Q</ButtonDay>
                            <ButtonDay type="button" onClick={() => addNewDay(4)} isSelected={weekDaysArray.includes(4) ? true : false}>Q</ButtonDay>
                            <ButtonDay type="button" onClick={() => addNewDay(5)} isSelected={weekDaysArray.includes(5) ? true : false}>S</ButtonDay>
                            <ButtonDay type="button" onClick={() => addNewDay(6)} isSelected={weekDaysArray.includes(6) ? true : false}>S</ButtonDay>
                        </Buttons>
                        <ButtonsSubmit>
                            <button type="reset" onClick={() => resetDisplay()} className="cancel">Cancelar</button>
                            <button className="confirm">Salvar</button>
                        </ButtonsSubmit>

                    </form>
                </SetNewHabits>
                <SetTaks>
                    {!thereIsHabits ? 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!' : ''}
                    <ListHabits userToken={userToken} isThereHabits={thereIsHabits} setIsThereHabits={setThereIsHabits} />
                </SetTaks>

            </Container>
            <Footer />

        </>
    );
}

export default HabitsPage;