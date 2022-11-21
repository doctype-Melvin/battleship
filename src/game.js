const player = require('./player');
const DOM = require('./DOM');

const battleship = () => {
  let human = player('human');
  let bot = player('bot');
  DOM().Menu();
  DOM().Grid('left', 'right');
  if (bot.board.inGame < 5) {
    bot.setRandomShip();
  }

  const gameReset = () => {
    human = player('human');
    bot = player('bot');
    DOM().Grid().resetGrid('left', 'right');
    DOM().Grid('left', 'right');
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
