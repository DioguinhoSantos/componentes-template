import React from "react";

import "./App.css";
import {GlobalStyle} from "./GlobalStyle";

import Footer from "./components/Footer";
import Garagem from "./components/Garagem/Garagem";
import Header from "./components/Header/Header";

let garaginha = [
  
  {
    modelo: "Brasília",
    cor: "Amarela",
    ano: 1988,
    flex: false
  },
  {
    modelo: "Opala",
    cor: "Verde",
    ano: 1981,
    flex: true
  },
  {
    modelo: "Kombi",
    cor: "Branca",
    ano: 1980,
    flex: false
  },
  {
    modelo: "Kadett",
    cor: "Dourado",
    ano: 1997,
    flex: true
  }
]

let alerta = (nome) => {
  alert(`Bem vindo à garagem de ${nome}`);
}

export default function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      
      <Header/>

      <Garagem nome="Diogo" carros = {garaginha} alerta = {alerta}/>
      
      <Footer/>
    </div>
  ); 
}
