const player = require('./player');

const Game = (() => {
  const human = player('human');
  const roboto = player('ai');
})();

module.exports = Game;
