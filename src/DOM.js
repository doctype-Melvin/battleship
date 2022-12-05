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
  menuBox.append(elementMaker('button', 'rotate', 'ROTATE', 'rotate'));
  menuBox.append(elementMaker('button', 'reset', 'RESET', 'reset'));
  const shipBtns = document.querySelectorAll('.shipBtn');
  const rotateBtn = document.querySelector('.rotate');
  const resetBtn = document.querySelector('.reset');

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

      [...shipPos].forEach((point) => {
        [...playerOcean].forEach((data) => {
          if (data.attributes[1].value === JSON.stringify(point)) {
            // data.removeAttribute('class');
            data.setAttribute('class', 'placed');
          }
        });
      });
    });
  };

  const attackPlaced = (input, array) => { // input = div
    if (array.length !== 0) {
      array.forEach((pos) => {
        if (input.attributes[1].value === JSON.stringify(pos)) {
          input.removeAttribute('class');
          input.setAttribute('class', 'hit');
        } else {
          input.setAttribute('class', 'bombed');
        }
      });
    } else {
      input.removeAttribute('class');
      input.setAttribute('class', 'bombed');
    }
  };

  const findDiv = (value, nodelist) => {
    const target = JSON.stringify(value);
    const div = [...nodelist].filter((item) => item.attributes[1].value === target)[0];
    return div;
  };

  return {
    playerOcean,
    cpuOcean,
    shipBtns,
    rotateBtn,
    resetBtn,
    shipPlaced,
    attackPlaced,
    findDiv,
  };
};

module.exports = DOM;
