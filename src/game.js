const player = require('./player');
const DOM = require('./DOM');
const Gameboard = require('./gameboard');

const battleship = () => {
  const human = player('human');
  const bot = player('bot');

  if (bot.board.inGame < 5) {
    bot.setRandomShip();
  }

  return {
    human,
    bot,
  };
};

module.exports = battleship;
