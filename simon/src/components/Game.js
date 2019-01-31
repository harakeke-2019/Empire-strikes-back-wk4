import React, { Component } from 'react';

import '../css/Game.css'

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentScore: 4,
            scoreTracker: 0,
            colors: ['red', 'green', 'blue','yellow'],
            randomColors: [],
            guessedColors: [],
            wrongGuess: false, 
            hasStarted: false
        }
    }




    render() {
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
        </div>
      );
    }
  }
  
  export default Game;