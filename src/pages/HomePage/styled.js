import styled from "styled-components"

export const HomepageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px auto;
    padding: 30px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    max-width: 800px;
    width: 100%;
`;

export const DestinationDropdown = styled.select`
    width: 80%;
    padding: 10px;
    font-size: 1.2em;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    option {
        padding: 10px;
    }
`;