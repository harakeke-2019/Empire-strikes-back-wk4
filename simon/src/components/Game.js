import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../css/Game.css'

function randomizeColors (colors, length)  {
    return Array.from({length}, _ => colors[Math.floor(Math.random() * 4)])
}

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentScore: 8,
            scoreTracker: 0,
            colors: ['red', 'green', 'blue','yellow'],
            randomColors: [],
            guessedColors: [],
            wrongGuess: false, 
            hasStarted: false
        }
    }

    startGame = _ => {
        const { colors, currentScore, randomColors } = this.state;

        this.setState({
            randomColors : randomizeColors(colors, currentScore)
        })
        console.log(randomColors)
    }

    render() {
        console.log('render')
      return (
        <div className="App">
            <h1>Simon says..</h1>
            <div className="btn" id="red" value="1"
                onClick={() => console.log('red')}
            >
            </div>
            <div className="btn" id="green" value="2"
                onClick={() => console.log('green')}
            >
            </div>
            <div className="btn" id="blue" value="3"
                onClick={() => console.log('blue')}
            >
            </div>
            <div className="btn" id="yellow" value="4"
                onClick={() => console.log('yellow')}
            >
            </div>

            <button onClick={() => this.startGame()}>Start game</button>
            <Link to="/highscores">Highscores</Link>
        </div>
      );
    }
  }
  
  export default Game;
