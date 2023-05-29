import styled from "styled-components";

export const AccommodationsDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 170px;
`
export const Title = styled.h1`
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
`
export const Gallery = styled.div`
    width: 80vw;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: blueviolet;
    overflow: auto;
    img{
        max-width: 35vw;
        max-height: 25vh ;
        margin: 0px 20px;
    }
`

export const Description = styled.div`
    width: 80vw;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: yellow;
    overflow: auto;
    ul{
        width: 40vw;
        height: 25vh ;
        margin: 0px 20px;
        border: 1px solid black;
        padding: 10px;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    li {
        margin: 10px 0px;
        font-size: 15px;
    }
    h1 {
        font-size: 30px;
    }
`