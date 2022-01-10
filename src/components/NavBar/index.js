import React from 'react';
import logo from '../../assets/images/trackIt.png'

import { Container } from './styles';

function NavBar({ userInfos }) {

    return (
        <Container>
            <img src={logo} alt="logo TrackIt" />
            <img className="user-image" src={userInfos} alt="logo TrackIt" />
        </Container>
    );
}

export default NavBar;