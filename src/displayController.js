const game = require('./game');
const gameboard = require('./gameboard');
const elementMaker = require('./helper');
// MVC View
const displayController = () => {
  // The sections in main
  const shipsGrid = document.getElementById('ships');
  const attackGrid = document.getElementById('attacks');
  const menuBox = document.getElementById('menu');

  // Elements of the menu section
  menuBox.append(elementMaker('button', 'reset', 'Play Game', 'restart'));
  menuBox.append(elementMaker('div', 'info', 'Game info message', 'info'));
  gameboard().harbor.forEach((ship) => menuBox.append(elementMaker('button', 'shipBtn', ship.name.toUpperCase(), ship.name)));
  menuBox.append(elementMaker('button', 'rotate', 'ROTATE', 'rotate'));
  const playBtn = document.querySelector('.reset');
  const shipBtns = document.querySelectorAll('.shipBtn');
  const rotateBtn = document.querySelector('.rotate');

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

  // Nodelists
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

  const info = document.querySelector('.info');
  const reportStatus = (input) => {
    if (input === '') return 'Whoops';
    info.textContent = input;
    return input;
  };

  const interval = [900, 1180, 790, 1150, 1590];
  const random = () => interval[Math.floor(Math.random() * interval.length)];

  const removeListeners = () => {
    cpuOcean.forEach((node) => node.replaceWith(node.cloneNode(true)));
  };
  const isGameOver = (ply, cpu) => {
    if (ply.board.destroyed.length === 5) {
      console.log('Enemy destroyed our fleet');
      removeListeners();
      return reportStatus('Enemy destroyed our fleet');
    } if (cpu.board.destroyed.length === 5) {
      console.log('We destroyed our enemy!');
      removeListeners();
      return reportStatus('We destroyed our enemy!');
    } return false;
  };

  const playGame = (e, ply, cpu) => {
    if (cpu.board.fire(JSON.parse(e.target.attributes[1].value)) === null) return null;
    cpu.board.fire(JSON.parse(e.target.attributes[1].value));
    attackPlaced(e.target, cpu.board.onTarget);
    isGameOver(ply, cpu);
    if (!isGameOver(ply, cpu)) {
      setTimeout(() => {
        cpu.ranFire();
        const div = findDiv(ply.board.bombed[ply.board.bombed.length - 1], playerOcean);
        attackPlaced(div, ply.board.onTarget);
        isGameOver(ply, cpu);
      }, random());
    }
  };

  // Game over should prevent cpu from making another attack
  return {
    playerOcean,
    cpuOcean,
    shipBtns,
    rotateBtn,
    playBtn,
    makeGrid,
    shipPlaced,
    attackPlaced,
    playGame,
    findDiv,
    reportStatus,
  };
};

module.exports = displayController;
