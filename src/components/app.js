import React, { Component } from 'react';
import Square from "./tic.js";
import Board from "./tic.js";
import Game from "./tic.js";

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>

        <Square />
        <Board />
        <Game />
        
      </div>
    );
  }
}

