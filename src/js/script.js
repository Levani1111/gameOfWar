// Building a class for cards using a constructor
// Will add new values to this once I create a deck
class Card {
  constructor(value, suites) {
    this.suites = ["Spades / yvavi ", "Hearts / guli", "Diamonds / aguri", "Clubs / jvari"];
    this.values = [null,null,"2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];
    this.value = value;
    this.suit = suit;
  }

  lessThan(card2) {
    if (this.value < card2.value) {
      return true;
    } else if (this.value == card2.value) {
      return this.suites < card2.suites;
    }
    return false;
  }

  greaterThan(card2) {
    if (this.value > card2.value) {
      return true;
    } else if (this.value == card2.value) {
      return this.suites > card2.suites;
    }
    return false;
  }

  print() {
    return this.values[this.value] + " of " + this.suits[this.suitees];
  }
}
