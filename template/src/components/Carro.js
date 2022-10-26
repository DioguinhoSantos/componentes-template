import React from "react";

export default function Carro(props){

    return (
        <>
            <h2>Modelo: {props.carros.modelo}</h2>
                <ul>
                    <li>Cor: {props.carros.cor}</li>
                    <li>Ano: {props.carros.ano}</li>
                    <li>Flex: {props.carros.flex ? "Sim" : "Não"}</li>
                </ul>
        </>
    )
}