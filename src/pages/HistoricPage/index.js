import React from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

import { Container } from './styles';

function HistoricPage({ taskPercentualDone, userInfos }) {
    return (
        <>
            <NavBar userInfos={userInfos} />
            <Container>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Container>
            <Footer taskPercentualDone={taskPercentualDone} />
        </>
    )
}

export default HistoricPage;