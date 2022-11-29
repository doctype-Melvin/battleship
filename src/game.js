const player = require('./player');
const input = require('./DOM');

const controller = () => {
  const human = player('human', 'roboto');
  const roboto = player('roboto', 'human');

  // First phase of game: Place ships
  if (roboto.board.inGame < 5) {
    roboto.board.randomShips();
    input().activateShip(human);
  }
  return {
    human,
    roboto,
  };
};

module.exports = controller;
