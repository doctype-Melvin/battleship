const player = require('./player');
const DOM = require('./DOM');

const game = () => {
  const domInst = DOM();
  const harborBtns = domInst.shipBtns;
  const leftGrid = domInst.playerOcean;
  const rightGrid = domInst.cpuOcean;
  const rotation = domInst.rotateBtn;
  const reset = domInst.resetBtn;

  const removeListeners = () => {
    rightGrid.forEach((node) => node.replaceWith(node.cloneNode(true)));
  };
  const isGameOver = (ply, cpu) => {
    if (ply.board.destroyed.length === 5) {
      console.log('Enemy destroyed our fleet');
      removeListeners();
      return domInst.reportStatus('Enemy destroyed our fleet');
    } if (cpu.board.destroyed.length === 5) {
      console.log('We destroyed our enemy!');
      removeListeners();
      return domInst.reportStatus('We destroyed our enemy!');
    } return null;
  };

  const placeAttacks = (ply, cpu) => {
    rightGrid.forEach((cell) => cell.addEventListener('click', (e) => {
      domInst.playGame(e, ply, cpu);
      // cpu.board.fire(JSON.parse(e.target.attributes[1].value));
      // domInst.attackPlaced(e.target, cpu.board.onTarget);
      // domInst.reportStatus();
      // setTimeout(() => {
      //   cpu.ranFire();
      //   const div = domInst.findDiv(ply.board.bombed[ply.board.bombed.length - 1], leftGrid);
      //   domInst.attackPlaced(div, ply.board.onTarget)
      //   ,
      //   random();
      // });
      isGameOver(ply, cpu);
    }));
  };

  const placeShips = (ply, cpu) => {
    let ship = null;
    let coor = null;

    reset.addEventListener('click', () => {
      ply.ranShip();
      domInst.shipPlaced(ply);
      if (ply.board.allInPlace()) {
        cpu.ranShip();
        return placeAttacks(ply, cpu);
      }
    });

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
