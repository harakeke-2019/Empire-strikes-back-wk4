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
            currentScore: 3,
            scoreTracker: 0,
            colors: ['red', 'green', 'blue','yellow'],
            randomColors: [],
            guessedColors: [],
            wrongGuess: false, 
            hasStarted: false,
            red: 'red',
            green: 'green',
            yellow: 'yellow',
            blue: 'blue'
        }
    }

    startGame = _ => {
        const { colors, currentScore, randomColors } = this.state;

        let originalColor = [...randomColors];
        const self = this

        this.setState({
            randomColors : randomizeColors(colors, currentScore)
        })
        //console.log(randomColors)

        
        for(let i = 0; i < originalColor.length; i++) {
            setTimeout(function(){

                return function(){
                    if(originalColor[i] === 'red') {
                        self.setState({
                            red: 'black'
                        })
                    }
                    if(originalColor[i] === 'green') {
                        self.setState({
                            green: 'black'
                        })
                    }
                    if(originalColor[i] === 'yellow') {
                        self.setState({
                            yellow: 'black'
                        })
                    }
                    if(originalColor[i] === 'blue') {
                        self.setState({
                            blue: 'black'
                        })
                    }
                    console.log(originalColor[i])
                    console.log('printing, ', i);
                    originalColor[i] ='black'
                    console.log(originalColor)
                }
                
                }(), i*1000)
                
                console.log('random',randomColors)
            }
                
  
}
    

    render() {
      return (
        <div className="App">
            <h1>Simon says..</h1>
            <div style={{width: '200px', height: '200px', backgroundColor: `${this.state.red}` }}
                onClick={() => console.log('red')}
            >
            </div>
            <div style={{width: '200px', height: '200px', backgroundColor: `${this.state.green}` }}
                onClick={() => console.log('green')}
            >
            </div>
            <div style={{width: '200px', height: '200px', backgroundColor: `${this.state.yellow}` }}
                onClick={() => console.log('blue')}
            >
            </div>
            <div style={{width: '200px', height: '200px', backgroundColor: `${this.state.blue}` }}
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
