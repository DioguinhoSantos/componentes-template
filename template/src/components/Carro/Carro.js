import React from "react";

import { TituloModelo } from "./styled";

export default function Carro(props){

    return (
        <>
                <ul>
                    <TituloModelo>{props.carros.modelo}: </TituloModelo>
                    
                    <li>Cor: {props.carros.cor}</li>
                    <li>Ano: {props.carros.ano}</li>
                    <li>Flex: {props.carros.flex ? "Sim" : "Não"}</li>
                    <li>Adicionado por: {props.adicionadoPor}</li>
                </ul>
        </>
    )
}