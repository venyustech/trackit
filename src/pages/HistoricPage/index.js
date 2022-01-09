import React from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

import { Container } from './styles';

function HistoricPage() {
    return (
        <>
            <NavBar />
            <Container>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Container>
            <Footer />
        </>
    )
}

export default HistoricPage;