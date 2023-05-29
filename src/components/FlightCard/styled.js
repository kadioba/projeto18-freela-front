import styled from "styled-components";

export const FlightContainer = styled.div`
    width: 25%;
    max-width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    margin: 20px;
    background-color: white;
    border-radius: 20px;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    img{
        width: 100%;
        height: 100%;
        max-height: 200px;
        border-radius: 10px;
    }
    h1{
        font-size: 20px;
        margin: 5px;
        font-weight: lighter;
    }

`