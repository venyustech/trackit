import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        margin: 0 20px;
    }
    .user-image {
        
        width: 51px;
        height: 51px;

        border-radius: 50%;

    }
`;

export { Container };
