const player = require('./player');

const battleship = () => {
  let human = player('human');
  let bot = player('bot');

  if (bot.board.inGame < 5) {
    bot.setRandomShip();
  }

  const gameReset = () => {
    human = player('human');
    bot = player('bot');
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
