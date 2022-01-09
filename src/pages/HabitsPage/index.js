import React, { useState } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { SiAddthis } from 'react-icons/si'

import { Container, Header, Input, SetNewHabits, Buttons, ButtonsSubmit } from './styles';

function HabitsPage() {
    const [thereIsHabits, setThereIsHabits] = useState('');
    const [newHabitTitle, setNewHabitTitle] = useState('');

    function isThereHabits() {
        console.log("cliquei")
        setThereIsHabits('1')
    }
    function handleNewHabits(answer) {
        console.log("funcionou")
    }
    return (
        <>
            <NavBar />
            <Header>
                <div className="habits-wrapper">
                    <h1>Meus Habitos</h1>
                    <SiAddthis onClick={() => isThereHabits()} />
                </div>
            </Header>
            <Container>
                <SetNewHabits>
                    <form onSubmit={handleNewHabits}>
                        <Input type="text"
                            onChange={(e) => setNewHabitTitle(e.target.value)}
                            value={newHabitTitle}
                            placeholder="nome do hábito"
                        />
                        <Buttons>
                            <button type="button" className="weekDays">D</button>
                            <button type="button" className="weekDays">S</button>
                            <button type="button" className="weekDays">T</button>
                            <button type="button" className="weekDays">Q</button>
                            <button type="button" className="weekDays">Q</button>
                            <button type="button" className="weekDays">S</button>
                            <button type="button" className="weekDays">S</button>
                        </Buttons>
                        <ButtonsSubmit>
                            <button type="button" className="cancel">Cancelar</button>
                            <button type="submit" className="confirm">Salvar</button>
                        </ButtonsSubmit>

                    </form>
                </SetNewHabits>
                <div className="noHabbitsMessage">
                    {thereIsHabits === '' || thereIsHabits === 0 ? 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!' : ''}
                </div>

            </Container>
            <Footer />

        </>
    );
}

export default HabitsPage;