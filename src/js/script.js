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
  addCards() {
    let suits = [
      "hearts - guli",
      "diamond - aguri",
      "clubs - yvavi",
      "spade - jvari"
    ];
    let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    let scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], scores[j]));
      }
    }
  }
  shuffle() {
    //found oniline
    //shuffle
    for (let i = this.cards.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    return this.cards;
  }
  // deal
  deal() {
    for (let i = 0; i < this.cards.length; i++) {
      if (i % 2 === 0) {
        player1.push(this.cards[i]);
      } else {
        player2.push(this.cards[i]);
      }
    }
  }
}
// bring the deck into existance
const mainDeck = new Deck();
// add cards to the deck
mainDeck.addCards();
// shuffle those cards
mainDeck.shuffle();
// deal the cards
mainDeck.deal();
// game works to compare cards
function compare(){
    if(cardsInPlay1[0].score > cardsInPlay2[0].score){
        player1.push(cardsInPlay1[0], cardsInPlay2[0]);
        cardsInPlay1 = [];
        cardsInPlay2 = [];
        cardsInPlay3 = [];
        console.log(`Player 1 wins this round! Player 1 has ${player1.length} cards! Player 2 has ${player2.length} cards!`)