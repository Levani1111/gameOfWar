// Building a class for cards using a constructor
// Will add new values to this once I create a deck
// making georgian language parts
class Card {
  constructor(value, suit) {
    this.suits = ["Spades / kvavi", "Hearts/ guli", "Diamonds/ aguri", "Clubs/ jvari"];
    this.values = [null,null,"2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];
    this.value = value;
    this.suit = suit;
  }

  lessThan(card2) {
    if (this.value < card2.value) {
      return true;
    } else if (this.value === card2.value) {
      return this.suit < card2.suit;
    }
    return false;
  }

  greaterThan(card2) {
    if (this.value > card2.value) {
      return true;
    } else if (this.value === card2.value) {
      return this.suit > card2.suit;
    }
    return false;
  }

  print() {
    return this.values[this.value] + " of " + this.suits[this.suit];
  }
}
//Building a deck class

class Deck {
  constructor() {
    this.cards = [];
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
