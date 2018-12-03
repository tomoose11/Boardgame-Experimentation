import React, { Component } from 'react';
import Tile from './tile';

class Board extends Component {
  state = {
    player1turn: true
  };
  render() {
    return (
      <div id="board" style={{ margin: 'auto' }}>
        <div id="row" style={{ display: 'flex' }}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div id="row" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div id="row" style={{ display: 'flex' }}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div id="row" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div id="row" style={{ display: 'flex' }}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div id="row" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div id="row" style={{ display: 'flex' }}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div id="row" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
    );
  }
}

export default Board;
