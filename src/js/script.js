// Building a class for cards using a constructor
// Will add new values to this once I create a deck
// making georgian language parts
let player1 = [];
let player2 = [];
let cardsSet1 = [];
let cardsSet2 = [];


class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
};

class Deck {
  constructor() {
    this.cards = [];
  }
  addCards(){
    let suits = ['hearts - guli', 'diamond - aguri', 'clubs - yvavi', 'spade - jvari'];
    let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
       let scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
       for(let i=0; i<suits.length; i++){
           for(let j=0; j<ranks.length; j++){
               this.cards.push(new Card(suits[i], ranks[j], scores[j]))
           }
       }
    }
    shuffle() {
    //found oniline
      for(let i=this.cards.length - 1; i > 0; i-=1){ 
        let j = Math.floor(Math.random() * (i + 1));
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp
      }  
      return this.cards;
  }
    
    }
  
    for (let i = 2; i <= 14; i++) {
      for (let j = 0; j <= 3; j++) {
        let card = new Card(i, j);
        this.cards.push(card.print());
      }
    }
    this.shuffle(this.cards);
    this.shuffle(this.cards);
  }

  removeCard() {
    if (this.cards.length === 0) {
      return;
    }
    return this.cards.pop();
  }


  shuffle() {
    for (let i = 0; i <= 51; i++) {
      var j = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    return this.cards;
  }
}

// player class buiid


class Player {
  constructor(name) {
    this.wins = 0;
    this.card = "";
    this.name = name;
  }
}

// build the game


class Game {
  constructor() {
    let name1 = prompt("What is Player 1's Name?"); //display a prompt box wich ask user fro name and output a message
    let name2 = prompt("What is Player 2's Name?");
    this.deck = new Deck();
    this.player1 = new Player(name1);
    this.player2 = new Player(name2);
  }

  wins(winner) {
    console.log(`${winner} is the winner this round!!! Congratulations!`);
  }

  draw(player1Name, player1Card, player2Name, player2Card) {
    console.log(
      `${player1Name} drew ${player1Card} and ${player2Name} drew ${player2Card}`
    );
  }

  playGame() {
    let cards = this.deck.cards;
    console.log("Let the War Begin! FIRE!!!!");
    while (cards.length >= 2) {
      
      let player1Card = this.deck.removeCard();
      let player2Card = this.deck.removeCard();
      let player1Name = this.player1.name;
      let player2Name = this.player2.name;
      this.draw(player1Name, player1Card, player2Name, player2Card);
      if (player1Card > player2Card) {
        this.player1.wins++;
        this.wins(this.player1.name);
      } 

// insert WAR else if statement to address ties
      else {
        this.player2.wins++;
        this.wins(this.player2.name);
      }
    }
    let win = this.winner(this.player1, this.player2);
    console.log(`The war is over! ${win} is the winner! Congratulations ${win} !`);
  }

  winner(player1, player2) {
    if (player1.wins === player2.wins) {
      return "It was a tie!";
    } else {
      return player1.wins > player2.wins ? player1.name : player2.name;
    }
  }


}
console.log('hello here')

//constitute the game
const game = new Game();
game.playGame();




