import styled from "styled-components";

const Header = styled.div`
    padding-top: 70px;
    .habits-wrapper{
        margin: 28px 17px;
        display: flex;
        justify-content: space-around;

        h1{
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }
        svg{
            width: 40px;
            height: 35px;

            color: #52B6FF;
            border-radius: 4.63636px;
            cursor: pointer;
        }
    }
`;

const Container = styled.div`
    margin: 0 17px;
`

const Input = styled.input`
    height: 40px;
    width: 95%;
    margin: 8px;
    margin-top: 19px;
    color: #222222;

    font-size:20px;
    line-height: 25px;
    border: 1px solid #D5D5D5;
    border-radius: 5px; 
    ::placeholder {
      color: #DBDBDB;
    }
`;
const SetNewHabits = styled.div`
    display: ${(props) => (props.newHabitDisplay ? "flex" : "none")};

    margin-bottom: 30px;
    form{
        width: 100%;
        height: 180px;
        background-color: #FFFFFF;
        border-radius: 5px;
    }
`
const Buttons = styled.div`
    margin: 0 5%;
    display: flex;
    justify-content: space-between;
`
const ButtonDay = styled.button`
    all:unset;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
    font-size: 19.976px;
    line-height: 25px;
    color: ${(props) => (props.isSelected ? "#FFFFFF" : "#DBDBDB")};
    background: ${(props) => (props.isSelected ? "#CFCFCF" : "#FFFFFF")};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }

`
const ButtonsSubmit = styled.div`
    margin: 0 5%;
    display: flex;
    justify-content: space-between;
    button{
        all:unset;
        margin-top: 10px;
        width: 40%;
        cursor: pointer;
        &:hover{
            opacity: 0.5;
        }
    }
    .cancel{
        height: 35px;
        font-size: 15.976px;
        line-height: 20px;

        text-align: center;

        color: #52B6FF;
        background: #FFFFFF;

        border-radius: 4.63636px;
        border-color: white;

    }
    .confirm{
        background: #52B6FF;
        border-radius: 4.63636px;

        font-size: 15.976px;
        line-height: 20px;
        text-align: center;

        color: #FFFFFF;
    }
`
const SetTaks = styled.div`
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
`
export { Container, Header, Input, SetNewHabits, Buttons, ButtonsSubmit, ButtonDay, SetTaks };