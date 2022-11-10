import React from "react";

import Carro from "../Carro/Carro";
import { BotaoGaragem, Estacionamento, GaragemContainer, TituloGaragem } from "./styled";

export default function Garagem(props){

    return (
        <GaragemContainer>
            <TituloGaragem>Garagem de {props.nome}</TituloGaragem>

            <BotaoGaragem onClick={() => props.alerta(props.nome)}>teste do colir</BotaoGaragem>
            <Estacionamento>

                <Carro carros = {props.carros[0]} adicionadoPor = {`Diogo`}/>
                <Carro carros = {props.carros[1]} adicionadoPor = {`Jeffs`}/>
                <Carro carros = {props.carros[2]} adicionadoPor = {`Natanzin`}/>
                <Carro carros = {props.carros[3]} adicionadoPor = {`Caigordo`}/>
                
            </Estacionamento>
        </GaragemContainer>
    )
}