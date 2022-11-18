const player = require('./player');
const DOM = require('./DOM');

const battleship = () => {
  let human = player('human');
  let bot = player('bot');
  DOM().Menu();
  DOM().Grid('right', 'left');
  if (bot.board.inGame < 5) {
    bot.setRandomShip();
  }

  const gameReset = () => {
    human = player('human');
    bot = player('bot');
    DOM().Grid('left');
    DOM().Grid('right');
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
