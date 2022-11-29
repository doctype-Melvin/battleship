const player = require('./player');
const input = require('./DOM');

const controller = () => {
  const human = player('human', 'roboto');
  const roboto = player('roboto', 'human');
  const DOM = input();
  // First phase of game: Place ships
  if (human.board.inGame.length < 5) {
    DOM.activateShip(human);
    console.log(human.board.inGame.length);
  }
  return {
    human,
    roboto,
  };
};

module.exports = controller;
