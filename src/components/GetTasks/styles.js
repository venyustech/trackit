import styled from "styled-components";

const Container = styled.div`
`
const TasksWrapper = styled.div`
`
const TaskCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 100px;
    .infos{
        width: 100%;
    }
    svg{
        width: 20px;
        height: 20px;
        cursor: pointer;
         &:hover{
        opacity: 0.5;
        }
    }
`
const TaskBox = styled.div`
    display: flex;
    padding: 13px 15px;
    background-color: aliceblue;
    border-radius: 5px;
    background: white;
    margin: 10px;
`
const Title = styled.div`
    width: 208px;
    height: 25px;
    font-size: 19.976px;
    line-height: 25px;

    color: #666666;
`
const WeekDays = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
`
const Button = styled.button`
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
export { Container, TasksWrapper, TaskCard, Title, WeekDays, Button, TaskBox };