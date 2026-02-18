// Global count variable
let count = 0;

// Function to count cards
function cardCounter(card) {
  // Increase count for low cards
  if (card >= 2 && card <= 6) {
    count++;
  }
  // Decrease count for high cards
  else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }
  // 7, 8, 9 -> no change

  // Decide Bet or Hold
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cardCounter(2));   // 1 Bet
console.log(cardCounter(3));   // 2 Bet
console.log(cardCounter(7));   // 2 Bet
console.log(cardCounter("K")); // 1 Bet
console.log(cardCounter("A")); // 0 Hold