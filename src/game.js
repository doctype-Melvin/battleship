const player = require('./player');

const startGame = () => {
  let cpu = null;
  let human = null;
  cpu = player('cpu', human);
  human = player('human', cpu);
};
