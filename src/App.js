import React, { Component } from "react";

class State extends Component {
  state = {
    nome: "Lidiane",
    idade: 33,
    cor: "azul"
  };

  mensagem = () => {
    this.setState({
      cor: "preta"
    });
  };

  voltar = () => {
    this.setState({
      cor: "azul"
    });
  };

  render() {
    return (
      <div>
        <h1>Minha cor favorita é {this.state.cor}</h1>
        <button onClick={this.mensagem}>Clica aqui</button>
        <button onClick={this.voltar}>voltar</button>
      </div>
    );
  }
}

export default State;
