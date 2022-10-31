import React from "react";

import Carro from "./Carro";

export default function Garagem(props){

    return (
        <>
            <h1>Garagem de {props.nome}</h1>

            <button onClick={() => props.alerta(props.nome)}>teste do dioguinho</button>

            <Carro carros = {props.carros[0]} adicionadoPor = {`Diogo`}/>
            <Carro carros = {props.carros[1]} adicionadoPor = {`Jeffs`}/>
            <Carro carros = {props.carros[2]} adicionadoPor = {`Natanzin`}/>
            <Carro carros = {props.carros[3]} adicionadoPor = {`Caigordo`}/>
        </>
    )
}