import React from 'react';
import { useNavigate } from 'react-router';

import { Container } from './styles';

function Footer() {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="habitsWrapper" onClick={() => navigate('/habitos')}>
                <p>Hábitos</p>
            </div>
            <div className="todayWrapper" onClick={() => navigate('/hoje')}>
                <p>Hoje</p>
            </div>
            <div className="historicWrapper" onClick={() => navigate('/historico')}>
                <p>Histórico</p>
            </div>
        </Container >

    )
}

export default Footer;