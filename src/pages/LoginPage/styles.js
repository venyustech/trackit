import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 16px;
`;

const Input = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 90%;

    margin-bottom: 8px;

    background-color: #FFFFFF;
    color: #222222;

    font-size:20px;
    line-height: 25px;
    border: 1px solid #D5D5D5;
    border-radius: 5px; 
    
    ::placeholder {
      color: #DBDBDB;
    }
`;

const Button = styled.button`

    height: 40px;
    width: 90%;

    background-color: #52B6FF;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    padding: 14px;
    ${(props) => !props.noMargin && "margin-bottom: 10px;"}
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 28px;
    cursor: pointer;
`;

const LinkStyled = styled(Link)`
    width: 100%;
    height: 17px;

    display: flex;
    justify-content: center;
    align-items: center;

    color:  #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

`;

export { Container, Input, Button, LinkStyled };



