import React from 'react';
import { render } from "react-dom";
import styled from 'styled-components';

import { useNavigate } from 'react-router';

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


import { Container, TodayWrapper } from './styles';
import { Link } from 'react-router-dom';
const percentage = 66;

function Footer({ taskPercentualDone }) {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="habitsWrapper" onClick={() => navigate('/habitos')}>
                <p>Hábitos</p>
            </div>
            <div className="todayWrapper" >
                <Link to="/hoje">
                    <TodayWrapper>
                        <CircularProgressbar
                            value={taskPercentualDone}
                            text={"Hoje"}
                            styles={buildStyles({
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent",
                                backgroundColor: "#3e98c7"
                            })}
                        />
                    </TodayWrapper>
                </Link>
            </div>
            <div className="historicWrapper" onClick={() => navigate('/historico')}>
                <p>Histórico</p>
            </div>
        </Container >

    )
}


export default Footer;


const TodayLogo = styled.button`


`