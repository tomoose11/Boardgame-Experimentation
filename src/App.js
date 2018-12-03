import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import Player from './components/player';
import Roll from './components/Roll';

class App extends Component {
  state = {
    player1pos: 63,
    roll: 0
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
  };

  componentDidUpdate = () => {
    // const tiles = document.getElementsByClassName('tile');
    // document.getElementsByClassName(
    //   'player'
    // )[0].style.transform = `translate(${tiles[
    //   this.state.player1pos
    // ].getBoundingClientRect().left - 753}px,${tiles[
    //   this.state.player1pos
    // ].getBoundingClientRect().top - 363}px)`;
    this.handleMove(this.state.roll, this.state.player1pos + this.state.roll);
  };

  render() {
    return (
      <div className="App">
        <Board />
        <Player />
        <Roll handleRoll={this.handleRoll} />
      </div>
    );
  }

  handleRoll = () => {
    console.log('rolled!');
    const roll = Math.floor(Math.random() * 6);
    this.setState(prevState => ({
      player1pos: prevState.player1pos - roll,
      roll: roll
    }));
  };

  handleMove = (roll, pos) => {
    setTimeout(() => {
      if (roll > 0) {
        const tiles = document.getElementsByClassName('tile');
        document.getElementsByClassName(
          'player'
        )[0].style.transform = `translate(${tiles[
          pos - 1
        ].getBoundingClientRect().left - 753}px,${tiles[
          pos - 1
        ].getBoundingClientRect().top - 363}px)`;
        roll--;
        this.handleMove(roll, pos - 1);
      }
    }, 500);
  };
}

export default App;
