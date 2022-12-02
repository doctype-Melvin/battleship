const player = require('./player');
const DOM = require('./DOM');

const game = () => {
  const domInst = DOM();
  const harborBtns = domInst.shipBtns;
  const leftGrid = domInst.playerOcean;
  const rightGrid = domInst.cpuOcean;
  const rotation = domInst.rotateBtn;
  const interval = [1900, 1580, 2100, 2250, 1250, 2890];
  const random = () => interval[Math.floor(Math.random() * interval.length)];

  const placeAttacks = (ply, cpu) => {
    rightGrid.forEach((cell) => cell.addEventListener('click', (e) => {
      cpu.board.fire(JSON.parse(e.target.attributes[1].value));
      domInst.attackPlaced(e);
      setTimeout(() => cpu.ranFire(), random());
    }));
  };

  const placeShips = (ply, cpu) => {
    let ship = null;
    let coor = null;
    harborBtns.forEach((btn) => btn.addEventListener('click', (e) => {
      ship = e.target.id;
    }));

    leftGrid.forEach((cell) => cell.addEventListener('click', (e) => {
      coor = JSON.parse(e.target.attributes[1].value);
      ply.board.placeShip(ship, coor);
      domInst.shipPlaced(ply);
      if (ply.board.allInPlace()) {
        cpu.ranShip();
        return placeAttacks(ply, cpu);
      }
    }));

    rotation.addEventListener('click', () => {
      if (ship === null) return;

      ply.board.getShip(ship).type.rotate();
    });
  };

  const startGame = () => {
    let cpu = null;
    let human = null;
    human = player('human', cpu);
    cpu = player('cpu', human);
    placeShips(human, cpu);
  };

  return {
    startGame,
  };
};

module.exports = game;
