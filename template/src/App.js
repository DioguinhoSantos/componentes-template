import React from "react";

import "./App.css";
import Footer from "./components/Footer";
import Garagem from "./components/Garagem";
import Header from "./components/Header";

export default function App() {
  
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

  return (
    <div className="App">
      <Header/>      
      <Garagem nome="Diogo" carros = {garaginha}/>
      <Footer/>
    </div>
  ); 
}
