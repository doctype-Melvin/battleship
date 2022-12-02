const gameboard = require('./gameboard');
const elementMaker = require('./helper');

const DOM = () => {
  const shipsGrid = document.getElementById('ships');
  const attackGrid = document.getElementById('attacks');
  const menuBox = document.getElementById('menu');

  // Elements of the menu section
  menuBox.append(elementMaker('div', 'score', 'Score board', 'score'));
  menuBox.append(elementMaker('div', 'info', 'Game info message', 'info'));
  gameboard().harbor.forEach((ship) => menuBox.append(elementMaker('button', 'shipBtn', ship.name.toUpperCase(), ship.name)));
  menuBox.append(elementMaker('button', 'reset', 'RESET', 'reset'));
  const shipBtns = document.querySelectorAll('.shipBtn');

  // Grid factory
  const makeGrid = (id, side) => {
    for (let i = 0; i < 100; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add(id);
      cell.setAttribute('datacoord', JSON.stringify(gameboard().ocean[i]));
      side.append(cell);
    }
    return side;
  };

  makeGrid('ships', shipsGrid);
  makeGrid('attacks', attackGrid);

  const playerOcean = document.querySelectorAll('.ships');
  const cpuOcean = document.querySelectorAll('.attacks');

  // Change cell coloring
  const shipPlaced = (player) => {
    player.board.inGame.forEach((ship) => {
      const shipPos = ship.type.position;

      // [...shipPos].find((point) => [...playerOcean].find((data) => console.log(JSON.stringify(point) === data.attributes[1].value)));
    });
  };
  // data.attributes[1].value
  return {
    playerOcean,
    cpuOcean,
    shipBtns,
    shipPlaced,
  };
};

module.exports = DOM;
