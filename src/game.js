const player = require('./player');
const DOM = require('./DOM');

const game = () => {
  const domInst = DOM();
  const harborBtns = domInst.shipBtns;
  const leftGrid = domInst.playerOcean;
  const rightGrid = domInst.cpuOcean;

  const placeAttacks = () => {
    rightGrid.forEach((cell) => cell.addEventListener('click', (e) => {
      console.log(JSON.parse(e.target.attributes[1].value));
    }));
  };

  const placeShips = (ply, cpu) => {
    let ship = null;
    let coor = null;
    harborBtns.forEach((btn) => btn.addEventListener('click', (e) => {
      ship = e.target.id;
      console.log(ship);
    }));
    leftGrid.forEach((cell) => cell.addEventListener('click', (e) => {
      coor = JSON.parse(e.target.attributes[1].value);
      ply.board.placeShip(ship, coor);
      if (ply.board.allInPlace()) {
        cpu.ranShip();
        console.log(cpu.board.inGame.length);
        return placeAttacks(ply, cpu);
      }
    }));
  };

  const startGame = () => {
    let cpu = null;
    let human = null;
    cpu = player('cpu', human);
    human = player('human', cpu);
    placeShips(human, cpu);
  };

  return {
    startGame,
  };
};

module.exports = game;
