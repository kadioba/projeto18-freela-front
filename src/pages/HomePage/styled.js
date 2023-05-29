import styled from "styled-components"

export const HomepageContainer = styled.div`
    width: 100vw;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const DestinationDropdown = styled.select`
    width: 80vw;
    height: 50px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: aliceblue;
    option {
        width: 100%;
        height: 100%;
        background-color: red
    }
`