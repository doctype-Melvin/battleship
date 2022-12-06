const player = require('./player');
const displayController = require('./displayController');
// MVC Controller
const game = () => {
  const domInst = displayController();
  const harborBtns = domInst.shipBtns;
  const leftGrid = domInst.playerOcean;
  const rightGrid = domInst.cpuOcean;
  const rotate = domInst.rotateBtn;

  const placeAttacks = (ply, cpu) => {
    rightGrid.forEach((cell) => cell.addEventListener('click', (e) => {
      domInst.playGame(e, ply, cpu);
    }));
  };

  const placeShips = (ply, cpu) => {
    let ship = null;
    let coor = null;

    // random.addEventListener('click', () => {
    //   ply.ranShip();
    //   domInst.shipPlaced(ply);
    //   if (ply.board.allInPlace()) {
    //     cpu.ranShip();
    //     return placeAttacks(ply, cpu);
    //   }
    // });

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

    rotate.addEventListener('click', () => {
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
    placeShips,
  };
};

module.exports = game;
