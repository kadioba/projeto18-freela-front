import styled from "styled-components";

export const AccommodationsDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5% auto;
    padding: 30px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    max-width: 800px;
    width: 100%;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2em;
    color: #333;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const Gallery = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    overflow: auto;
    img {
        max-width: 100%;
        height: auto;
        margin: 15px;
    }
`;

export const Description = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    width: 100%;
    ul {
        list-style-type: none;
        padding-left: 0;
        width: 35vw;
        h1 {
            font-size: 1.5em;
            color: #333;
            text-transform: uppercase;
            margin-bottom: 10px;
        }
        li {
            font-size: 1.2em;
            color: #333;
            margin-bottom: 10px;
        }
    }
`;