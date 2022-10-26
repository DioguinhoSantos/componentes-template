import React from "react";

import Carro from "./Carro";

export default function Garagem(props){

    return (
        <>
            <h1>Garagem de {props.nome}</h1>
            <Carro carros = {props.carros[0]}/>
            <Carro carros = {props.carros[1]}/>
            <Carro carros = {props.carros[2]}/>
            <Carro carros = {props.carros[3]}/>
        </>
    )
}