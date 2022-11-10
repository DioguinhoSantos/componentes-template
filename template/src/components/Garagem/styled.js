import styled from "styled-components";

export const BotaoGaragem = styled.button`
    border: 1px solid black;
    padding: 8px;
    background-color: gray;
    font-family: cursive;
    /* font-weight: bold; */
    border-radius: 5px;
`

export const TituloGaragem = styled.h1`
    color: green;
`

export const GaragemContainer = styled.main`
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border : 1px solid black;
    border-radius: 5px;
`

export const Estacionamento = styled.div`
    border: 1px solid blue;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`
