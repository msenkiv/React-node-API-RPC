import React, { Component } from "react";
import Lista from './Lista';
class App extends Component {
    state = {
            progs: []
        };
        // Chamada da api na criação do componente raiz
    componentDidMount() {

    }
    render() {
        return (<Lista />);
    }
}

export default App;