import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import { Button } from 'reactstrap';

import Game from './components/Game'
import Highscores from './components/Highscores'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/highscores" component={Highscores}/>
        <Route exact path="/" component={Game} />
      </div>
    );
  }
}

export default App;
