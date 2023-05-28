import styled from "styled-components";

export const FlightsPageContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    margin-top: 70px;
    display: flex;
    background-color: bisque;
`

export const FlightsPageContent = styled.div`
    width: 80vw;
    height: 100%;
    background-color: yellow;
    h1 {
        text-align: center;
    }
`
export const Flights = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: blueviolet;
`