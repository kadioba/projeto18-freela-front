import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 70px;
    background-color: #0A4D68;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid white;
    button {
        width: 100px;
        height: 30px;
        border-radius: 100px;
        border: none;
        background-color: #05BFDB;
        color: white;
        font-weight: bold;
    }
`
export const HeaderText = styled.h1`
    font-size: 30px;
    color: white;
    text-align: center;
    font-family: 'Lobster', cursive;
`