import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "./App.css";
import Scores from "./components/Scores";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriendCardIds: [],
    message: "Click to make a friend",
    score: 0,
  };

  componentDidMount() {
    this.setState({ friends: this.handleShuffle(this.state.friends) });
        }

  handleShuffle = friends => {
    console.log(friends);
    let i = friends.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
      i--;
    }
    return friends;
  };

  handleCorrectGuess = (newData) => {
    const {count} = this.state;
    const newScore = count + 1;
    this.setState({
      friends: this.handleShuffle(newData),
      count: newScore,
    });
    console.log(newScore)
  };

  handleIncorrectGuess = friends => {
    this.setState({
      friends: this.resetData(friends),
      count: 0
    });
  };
  resetData = friends => {
    const resetData = friends.map(item => ({ ...item, guessed: false }));
    return this.handleShuffle(resetData);
  };


HandleClick = (cardId) => {
  let clickedCards = this.state.clickedFriendCardIds;
  let message = this.state.message;
  let score = this.state.score;

  if (clickedCards.includes(cardId)) {
    message = "You already clicked that one, try again!";
    clickedCards = [];
    console.log(message);
  } else {
    clickedCards.push(cardId);
    if (clickedCards.length === this.state.friends.length) {
      message = "Winner! Click an image to restart!";
      console.log(message);
    } else {
      message = "Nice job, keep going!";
      console.log(message);
    }
  }

  score = clickedCards.length;


// // Trigger state change
this.setState({ friends, clickedFriendCardIds: clickedCards, score: score, message: message });
}


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
  
    return (

      <Wrapper>
      <Jumbotron/>
    

    <Nav
      score={this.state.score}>     
    </Nav>
      <div className="App" >
        <Scores
          score={this.state.score}
        
          message={this.state.message}
        />
        <div className="cardCanvas">
          {this.state.friends.map(card => (
            <FriendCard
              key={card.id}
              id={card.id}
              image={card.image}
              clickHandler={this.HandleClick}
            />
          ))}
        </div>
      </div>
    
      </Wrapper>
    );
  }
}

export default App;
