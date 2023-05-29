import styled from "styled-components";

export const AppBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow-x: auto;
    background-image: url(${props => props.background});
    background-size: cover;
`