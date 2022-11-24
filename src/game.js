const player = require('./player');

const Game = () => {
  const human = player('human');
  const roboto = player('ai');
  return {
    human,
    roboto,
  };
};

const gameController = Game();

module.exports = gameController;
