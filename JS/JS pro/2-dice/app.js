function rollDice(dice) {
    const match = dice.match(/^d(\d+)$/);
    if (!match) {
      return new Error("Неверный формат кубика. Используй например: d6, d20");
    }
  
    const sides = parseInt(match[1], 10);
    return Math.floor(Math.random() * sides) + 1;
  }
  
  console.log(rollDice("d6"));   
  console.log(rollDice("d12"));  
  