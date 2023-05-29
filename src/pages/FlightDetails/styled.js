import styled from "styled-components";

export const FlighDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15% auto;
    padding: 30px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    max-width: 800px;
    width: 100%;
`;

export const FlightDetailsHeading = styled.h1`
    font-size: 2em;
    color: #333;
    text-transform: uppercase;
    margin-bottom: 15px;
`;

export const FlightDetailsSubHeading = styled.h2`
    font-size: 1.2em;
    color: #333;
    margin-bottom: 10px;
`;

export const FlightDetailsInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;