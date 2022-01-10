import React from 'react';
import logo from '../../assets/images/trackIt.png'

import { Container } from './styles';

function NavBar({ userImage }) {
    return (
        <Container>
            <img src={logo} alt="logo TrackIt" />
            <img className="user-image" src={userImage} alt="logo TrackIt" />
        </Container>
    );
}

export default NavBar;