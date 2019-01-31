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
            currentScore: 10,
            scoreTracker: 0,
            colors: ['red', 'green', 'blue','yellow'],
            randomColors: [],
            guessedColors: [],
            wrongGuess: false, 
            hasStarted: false,
            stlye: {
                backgroundColor: 'black'
            }
        }
    }

    startGame = _ => {
        const { colors, currentScore, randomColors } = this.state;


        let originalColor = [...randomColors];

        this.setState({
            randomColors : randomizeColors(colors, currentScore)
        })
        //console.log(randomColors)

        function changeColor () {
            for(let i = 0; i < originalColor.length; i++) {
                setTimeout(function(i){
                    return function(){
                      console.log('printing, ', i);
                      originalColor[i] ='black'
                      console.log(originalColor)
                    }
                  }(i), i*1000)
                }
            }


    changeColor()
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

            <button onClick={() => this.startGame()}>Start game</button>
            <Link to="/highscores">Highscores</Link>
        </div>
      );
    }
  }
  
  export default Game;
