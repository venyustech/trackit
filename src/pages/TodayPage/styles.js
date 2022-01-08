import styled from 'styled-components';

const Header = styled.div`
    padding-top: 70px; 
`;
const ContainerWrapper = styled.div`
    
    display: flex;
    align-items: center;
        
    margin: 16px;
    gap: 15px;
`
const Title = styled.h1`
    font-size: 22.976px;
    line-height: 29px;

    color: #126BA5;
`
const Subtitle = styled.h2`
    font-size: 17.976px;
    line-height: 22px;

    color: #BABABA;
`
const TitleWrapper = styled.div`

`


export { Header, ContainerWrapper, Title, Subtitle, TitleWrapper };
