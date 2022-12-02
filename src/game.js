const player = require('./player');
const DOM = require('./DOM');

const game = () => {
  const startGame = () => {
    let cpu = null;
    let human = null;
    cpu = player('cpu', human);
    human = player('human', cpu);
  };
  const domInst = DOM();
  const leftGrid = domInst.playerOcean;
  const rightGrid = domInst.cpuOcean;
  const placeShips = () => {
    leftGrid.forEach((cell) => cell.addEventListener('click', (e) => {
      console.log(e.target);
    }));
  };
  return {
    startGame,
    placeShips,
  };
};

module.exports = game;
