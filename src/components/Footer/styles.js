import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;

    bottom: 0;
    background: #FFFFFF;
    box-shadow: inset 0 0 1em rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .habitsWrapper, .historicWrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 100%;
        cursor: pointer;
                
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    .todayWrapper{
        position: relative;
        top: -1em;
        height: 90px;
        width: 90px;
        border-radius: 50px;
        background: #52B6FF;
    }
    .todayWrapper p{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #FFFFFF;       
    }
    .todayWrapper:hover{
        filter: brightness(90%);
    }
    .habitsWrapper:hover,.historicWrapper:hover{
        background-color: rgba(0, 0, 0, 0.03);

    }
`;




export { Container };

