const player = require('./player');
const createGrid = require('./DOM');

const battleship = () => {
  let human = player('human');
  let bot = player('bot');
  createGrid('left');
  createGrid('right');
  if (bot.board.inGame < 5) {
    bot.setRandomShip();
  }

  const gameReset = () => {
    human = player('human');
    bot = player('bot');
    createGrid('left');
    createGrid('right');
    return {
      human,
      bot,
    };
  };
  return {
    human,
    bot,
    gameReset,
  };
};

module.exports = battleship;
