import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import Player from './components/player';
import Roll from './components/Roll';

class App extends Component {
  state = {
    player1pos: 63,
    player2pos: 63,
    roll: 0,
    p1turn: true
  };
  componentDidMount = () => {
    let index = 64;
    const colors = { 0: 'red', 1: 'yellow', 2: 'green', 3: 'blue', 4: 'pink' };
    const tiles = document.getElementsByClassName('tile');
    tiles[0].style.color = 'green';
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].innerText = index;
      index--;
      console.log(i);
      tiles[i].style.backgroundColor = colors[i % 5];
    }

    document.getElementsByClassName(
      'player'
    )[0].style.transform = `translate(${tiles[
      this.state.player1pos
    ].getBoundingClientRect().left - 753}px,${tiles[
      this.state.player1pos
    ].getBoundingClientRect().top - 363}px)`;

    document.getElementsByClassName(
      'player'
    )[1].style.transform = `translate(${tiles[
      this.state.player2pos
    ].getBoundingClientRect().left - 783}px,${tiles[
      this.state.player2pos
    ].getBoundingClientRect().top - 363}px)`;
    document.getElementsByClassName('player')[1].style.backgroundColor =
      'white';
  };

  render() {
    return (
      <div className="App">
        <Board />
        <Player />
        <Player />
        <Roll handleRoll={this.handleRoll} />
      </div>
    );
  }

  handleRoll = () => {
    if (this.state.p1turn) {
      this.handleWhichPlayer('player1pos', 0);
    } else {
      this.handleWhichPlayer('player2pos', 1);
    }
  };

  handleWhichPlayer = (player, pindex) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    this.setState(
      prevState => ({
        [player]: prevState[player] - roll,
        roll: roll + 1
      }),
      () => {
        this.handleMove(
          this.state.roll,
          this.state[player] + this.state.roll,
          pindex
        );
        this.setState({
          p1turn: !this.state.p1turn
        });
      }
    );
  };

  handleMove = (roll, pos, player) => {
    setTimeout(() => {
      if (roll > 0) {
        const tiles = document.getElementsByClassName('tile');
        document.getElementsByClassName('player')[
          player
        ].style.transform = `translate(${tiles[pos - 1].getBoundingClientRect()
          .left - 753}px,${tiles[pos - 1].getBoundingClientRect().top -
          363}px)`;
        roll--;
        this.handleMove(roll, pos - 1, player);
      }
    }, 500);
  };
}

export default App;
