const player = require('./player');
const input = require('./DOM');

const controller = () => {
  const human = player('human', 'roboto');
  const roboto = player('roboto', 'human');
  const DOM = input();
  // First phase of game: Place ships
  DOM.placeChoice(human);
  return {
    human,
    roboto,
  };
};

module.exports = controller;
