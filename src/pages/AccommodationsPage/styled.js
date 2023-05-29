import styled from "styled-components";

export const AccommodationsPageContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    margin-top: 70px;
    display: flex;
    background-color: bisque;
`
export const AccommodationsPageTitle = styled.h1`
    font-family: 'Lobster', cursive;
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
    color: #0A4D68; 
`

export const AccommodationsPageContent = styled.div`
    width: 80vw;
    height: calc(100vh - 70px);
    background-color: #05BFDB;
    h1 {
        text-align: center;
    }
`
export const Accommodations = styled.div`
    width: 100%;
    height: calc(100vh - 70px - 50px);
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    overflow-y: auto;
`

export const FlightsPageButton = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #0A4D68;
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin: 10px;
    position: fixed;
    bottom: 10px;
    left: calc(50% - 100px);
    z-index: 1;
    cursor: pointer;
    &:hover {
        background-color: #088395;
    }
`