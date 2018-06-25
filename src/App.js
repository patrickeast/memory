import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import characters from "./characters.json"

class App extends Component {

  state = {
    message: "Click an image to begin!",
    topScore: 0,
    currentScore: 0,
    characters: characters,
    unselectedCharacter: characters,
  }

  componentDidMount() {
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  lose = () => {
    this.setState({
      message: "You guessed incorrectly!",
      topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
      currentScore: 0,
      characters: characters,
      unselectedCharacter: characters
    });
  }

  selectCharacter = name => {
    
    const findCharacter = this.state.unselectedCharacter.find(item => item.name === name);

    if (findCharacter === undefined) {
      // failure to select a new character
      this.lose();
    }
    else {
      // success to select a new character
      const newCharacter = this.state.unselectedCharacter.filter(item => item.name !== name);

      this.setState({
        message: "You guessed correctly!",
        currentScore: this.state.currentScore + 1,
        characters: characters,
        unselectedCharacter: newCharacter
      });
    }

    this.shuffleArray(characters);

    if (this.state.currentScore > 10) {
      var win = document.querySelectorAll(".container");
      while(win.firstChild) win.removeChild(win.firstChild);
      alert("You Win!");
    };
  };

  render() {
    return (
      <div>
        <Nav
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <header>
          <h1>Hey Arnold! Memory Game</h1>
          <h2>Click on image to earn points, but don't click on any more than once!</h2>
        </header>
        <main className="container">
          {
            this.state.characters.map(character => (
              <Cards
                key={Math.random()*12}
                name={character.name}
                image={character.image}
                selectCharacter={this.selectCharacter}
                currentScore={this.state.currentScore}
              />
            ))
          }
        </main>
        <footer className="footer">
          <div className="bottom">
            Hey Arnold! Memory Game
             <img alt="Nickelodeon" src={logo} />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
