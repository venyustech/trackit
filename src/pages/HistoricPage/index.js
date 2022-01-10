import React, { useContext } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import UserContext from '../../Providers/auth';

import { Container } from './styles';

function HistoricPage() {
    const { taskPercentualDone, userImage } = useContext(UserContext);

    return (
        <>
            <NavBar userImage={userImage} />
            <Container>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Container>
            <Footer taskPercentualDone={taskPercentualDone} />
        </>
    )
}

export default HistoricPage;